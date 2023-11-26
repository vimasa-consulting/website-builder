import { PLUGINS_BY_PROJECT, PLUGIN_BY_PROJECT } from "../../plugins";
import { EditorProps } from '@grapesjs/react';
import studioPlugin from "../../plugins/global/studioPlugin";
import { capitalize } from "../../utils";
import functionName from "../../utils/parsers/functionName";
import parseBoxShadow from '../../utils/parsers/boxShadow';
import { ProjectType } from "../../utils/types";
import localeEn from "../../locale/en";
import { parseGradient } from "../GradientPicker";
import { BackgroundType, PROPERTY_BG_IMAGE, PROPERTY_BG_TYPE, PROPERTY_IMAGE } from "../StyleManager/SectorBackground";
import { getStore } from "../../store";

const unitsPercent = ['%'];

const unitsTime = ['s', 'ms'];

const unitsAngle = ['deg', 'rad', 'grad'];

const unitsSize = ['px', '%', 'em', 'rem', 'vw', 'vh'];

const strToOption = (id: string) => ({ id, label: id.split('-').map(capitalize).join(' ') });

const fromStyleFnStack = (property: string) => {
  const nameProp = `${property}-name`;
  const valueProp = `${property}-value`;

 return (style: Record<string, string>, { separatorLayers }: any) => {
  const filter = style[property] || '';
  return filter ? filter.split(separatorLayers).map(input => {
    const { name, value } = functionName(input);
    const values = { [nameProp]: name, [valueProp]: value };
    return values;
  }) : [];
 }
}

const toStyleFnStack = (property: string, defValue = '') => {
  const nameProp = `${property}-name`;
  const valueProp = `${property}-value`;

  return (values: Record<string, string>, { name }: any) => {
    return { [name]: `${values[nameProp]}(${values[valueProp] || defValue})` };
  }
};

const get2DimProp = (property: string, { x, y, mergable }: any = {}) => {
  const propertyX = {
    property: `${property}-x`,
    type: 'integer',
    units: unitsSize,
    ...x,
  };
  const propertyY = {
    property: `${property}-y`,
    type: 'integer',
    units: unitsSize,
    ...y,
  };

  return {
    property,
    type: 'composite',
    properties: [
      propertyX,
      propertyY,
    ],
    ...(mergable && {
      fromStyle(style: Record<string, string>, { name, separator, property }: any) {
        const [propX, propY] = property.getProperties();
        const [valueX, valueY] = (style[name] || '').split(separator);
        return {
          [propX.getId()]: style[propX.getName()] || valueX || '',
          [propY.getId()]: style[propY.getName()] || valueY || valueX || '',
        }
      },
      toStyle(values: Record<string, string>, { name, property }: any) {
        const [propX, propY] = property.getProperties();
        const valueX = values[propX.getId()];
        const valueY = values[propY.getId()];

        return {
          [name]: valueX === valueY ? valueX : `${valueX} ${valueY}`,
        }
      },
    })
  };
}

/**
 * Handle updates of type/value properties (eg. when the layer changes)
 */
const handleTypeChange = (valueProp: string) => {
  return ({ property, to }: any) => {
    if (to.value) {
      const option = property.getOption();
      const propToUp = property.getParent().getProperty(valueProp);
      const unit = propToUp.getUnit();
      const props = {
        units: option.units || [],
        min: option.min,
        max: option.max,
        unit: '',
      };
      if (!unit || props?.units.indexOf(unit) < 0) {
        props.unit = props?.units[0] || '';
      }
      propToUp.up(props);
    }
  };
}

const getFilterProp = (property = 'filter') => {
  const nameProp = `${property}-name`;
  const valueProp = `${property}-value`;
  return {
    property,
    type: 'stack',
    layerSeparator: ' ',
    fromStyle(style: Record<string, string>, { separatorLayers }: any) {
      const filter = style[property] || '';
      return filter ? filter.split(separatorLayers).map(input => {
        const { name, value } = functionName(input);
        const values = { [nameProp]: name, [valueProp]: value };
        return values;
      }) : [];
    },
    toStyle(values: Record<string, string>, { name }: any) {
      return { [name]: `${values[nameProp]}(${values[valueProp] || '0'})` };
    },
    properties: [
      {
        property: nameProp,
        type: 'select',
        default: 'blur',
        options: [
          { id: 'blur', label: 'Blur', min: 0, units: ['px', 'em', 'rem', 'vw', 'vh'] },
          { id: 'brightness', label: 'Brightness', min: 0, units: ['%'] },
          { id: 'contrast', label: 'Contrast', min: 0, units: ['%'] },
          { id: 'grayscale', label: 'Grayscale',  min: 0, max: 100, units: ['%'] },
          { id: 'hue-rotate', label: 'Hue rotate', min: 0, max: 360, units: ['deg', 'rad', 'grad'] },
          { id: 'invert', label: 'Invert', min: 0, max: 100, units: ['%'] },
          { id: 'saturate', label: 'Saturate', min: 0, units: ['%'] },
          { id: 'sepia', label: 'Sepia', min: 0, max: 100, units: ['%'] },
        ],
        onChange: handleTypeChange(valueProp),
      },
      {
        property: valueProp,
        type: 'integer',
      },
    ]
  }
};

const getColorAsGradient = (color: string) => `linear-gradient(${color} 1%, ${color} 100%)`;

const getLayerFromBgImage = (imagePart: string) => {
  const result: Record<string, any> = {
    [PROPERTY_BG_IMAGE]: imagePart,
  };

  if (imagePart.indexOf('url(') > -1) {
    result[PROPERTY_BG_TYPE] = BackgroundType.Image;
  } else if (imagePart.indexOf('gradient(') > -1) {
    const parsed = parseGradient(imagePart);
    const stops = parsed.colorStops;
    const isLinear = parsed.name.indexOf('linear') >= 0;

    if (
      stops.length === 2 && isLinear && (stops[0].color === stops[1].color)
    ) {
      result[PROPERTY_BG_TYPE] = BackgroundType.Color;
    } else {
      result[PROPERTY_BG_TYPE] = BackgroundType.Gradient;
    }
  } else {
    result[PROPERTY_BG_TYPE] = BackgroundType.Color;
    result[PROPERTY_BG_IMAGE] = getColorAsGradient(imagePart);
  }

  return result;
};

export function getEditorPlugins(projectType: ProjectType): Required<EditorProps>['plugins'] {
  return [
    ...PLUGINS_BY_PROJECT[projectType],
    ...PLUGINS_BY_PROJECT.global,
    studioPlugin,
    PLUGIN_BY_PROJECT[projectType],
  ];
}

export function getEditorOptions(projectType: ProjectType) {
    const overflowProps = {
      type: 'select',
      options: ['visible', 'hidden', 'scroll', 'auto'].map(id => ({ id })),
      default: 'visible'
    };

    const gjsOpts = {
        undoManager: { trackSelection: false },
        showOffsets: true,
        cssIcons: '',
        assetManager: {
          /*
          assets: [
            'https://source.unsplash.com/random/210x210',
            'https://source.unsplash.com/random/220x220',
            'https://source.unsplash.com/random/230x230',
            'https://source.unsplash.com/random/210x220',
            'https://source.unsplash.com/random/220x230',
            'https://source.unsplash.com/random/230x240',
            'https://source.unsplash.com/random/220x210',
            'https://source.unsplash.com/random/230x210',
            'https://source.unsplash.com/random/240x210',

            'https://source.unsplash.com/random/310x210',
            'https://source.unsplash.com/random/320x220',
            'https://source.unsplash.com/random/330x230',
            'https://source.unsplash.com/random/310x220',
            'https://source.unsplash.com/random/320x230',
            'https://source.unsplash.com/random/330x240',
            'https://source.unsplash.com/random/320x210',
            'https://source.unsplash.com/random/330x210',
            'https://source.unsplash.com/random/340x210',

            'https://source.unsplash.com/random/410x210',
            'https://source.unsplash.com/random/420x220',
            'https://source.unsplash.com/random/430x230',
            'https://source.unsplash.com/random/410x220',
            'https://source.unsplash.com/random/420x230',
            'https://source.unsplash.com/random/430x240',
            'https://source.unsplash.com/random/420x210',
            'https://source.unsplash.com/random/430x210',
            'https://source.unsplash.com/random/440x210',
          ],
          */
        },
        blockManager: {},
        styleManager: {
          sectors: [
            {
              id: 'layout',
              name: 'Layout',
              properties: [
                { extend: 'display' },
                {
                  extend: 'flex-direction',
                  name: 'Direction',
                  type: 'radio',
                  default: 'row',
                }, {
                  extend: 'justify-content',
                  type: 'radio',
                  default: 'flex-start',
                }, {
                  extend: 'align-items',
                  type: 'radio',
                  default: 'stretch',
                },
                get2DimProp('gap', {
                  x: { property: 'row-gap', min: 0, default: '0' },
                  y: { property: 'column-gap', min: 0, default: '0' },
                  mergable: true,
                }),
                { extend: 'flex-wrap' },
                { extend: 'align-content' },
                { extend: 'align-self'},
                { extend: 'order'},
                {
                  property: 'flex',
                  type: 'composite',
                  // detached: true,
                  properties: [
                    {
                      type: 'integer',
                      property: 'flex-grow',
                      default: '0',
                      min: 0,
                    },
                    {
                      type: 'integer',
                      property: 'flex-shrink',
                      default: '0',
                      min: 0,
                    },
                    {
                      type: 'integer',
                      property: 'flex-basis',
                      fixedValues: ['auto'],
                      default: 'auto',
                      units: unitsSize,
                      min: 0,
                    },
                  ],
                }
              ],
            }, {
              id: 'size',
              name: 'Size',
              properties: [
                { extend: 'width'},
                { extend: 'min-width'},
                { extend: 'max-width'},
                { extend: 'height'},
                { extend: 'min-height'},
                { extend: 'max-height'},
              ],
            }, {
              id: 'space',
              name: 'Space',
              properties: [
                {
                  extend: 'padding',
                  detached: true,
                },
                {
                  extend: 'margin',
                  detached: true,
                },
              ]
            }, {
              id: 'position',
              name: 'Position',
              properties: [
                {
                  extend: 'position',
                  options: [
                    { id: 'static', label: 'Static' },
                    { id: 'relative', label: 'Relative' },
                    { id: 'absolute', label: 'Absolute' },
                    { id: 'fixed', label: 'Fixed' },
                    { id: 'sticky', label: 'Sticky' },
                  ],
                  onChange({ opts, property }: any) {
                    if (opts.__clear) {
                      const clearPositionProps = { top: '', right: '', bottom: '', left: '', 'z-index': '' };
                      property.__upTargetsStyle(clearPositionProps, opts);
                    }
                  }
                },
                { extend: 'top' },
                { extend: 'right' },
                { extend: 'bottom' },
                { extend: 'left' },
                {
                  extend: 'z-index',
                  type: 'integer',
                  default: '0',
                },
              ],
            }, {
              id: 'typography',
              name: 'Typography',
              properties: [
                { extend: 'font-family' },
                { extend: 'color' },
                { extend: 'font-size' }, { extend: 'font-weight' },
                { extend: 'line-height', min: 0 }, { extend: 'letter-spacing' },
                { extend: 'text-align' },
                {
                  extend: 'text-decoration',
                  type: 'select',
                  default: 'none',
                  options: [
                    { id: 'none', label: 'None' },
                    { id: 'underline', label: 'Underline' },
                    { id: 'overline', label: 'Overline' },
                    { id: 'line-through', label: 'Line through' },
                  ],
                },
                {
                  extend: 'text-transform',
                  type: 'select',
                  default: 'none',
                  options: [
                    { id: 'none', label: 'None' },
                    { id: 'capitalize', label: 'Capitalize' },
                    { id: 'uppercase', label: 'Uppercase' },
                    { id: 'lowercase', label: 'Lowercase' },
                  ],
                },
                {
                   extend: 'direction',
                   type: 'radio',
                   default: 'ltr',
                   options: [
                    { id: 'ltr', label: 'LTR' },
                    { id: 'rtl', label: 'RTL' },
                  ],
                },
                {
                  extend: 'white-space',
                  type: 'select',
                  default: 'normal',
                  options: [
                    { id: 'normal', label: 'Normal' },
                    { id: 'nowrap', label: 'No wrap' },
                    { id: 'pre', label: 'Pre' },
                    { id: 'pre-wrap', label: 'Pre wrap' },
                    { id: 'pre-line', label: 'Pre line' },
                    { id: 'break-spaces', label: 'Break spaces' },
                  ],
                }
                // text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
                // List of default fonts: https://stackoverflow.com/a/62755574
                //  Safe webfonts: https://web.mit.edu/jmorzins/www/fonts.html#sans-serif
                //  List per platform: https://granneman.com/webdev/coding/css/fonts-and-formatting/default-fonts
              ],
            }, {
              id: 'background',
              name: 'Background',
              properties: [
                // Stack of backgrounds (Color - Gradient - Image/Patterns)
                {
                  property: 'background',
                  type: 'stack',
                  layerSeparator: /(?<!\(.*[^)]),(?![^(]*\))/,
                  layerJoin: ', ',
                  // 1. "simple" -> 1
                  // 2. "simple, simple" -> 2
                  // 3. "rgba(1px, 2px, 3px)" -> 1
                  // 4. "rgba(1px, 2px, 3px), rgba(1px, 2px, 3px)" -> 2
                  // 5. "rgba(1px, rgba(11px, 22px, 33px), 3px), rgba(1px, rgba(11px, 22px, 33px), 3px)" -> 2
                  // 6. "rgba(1px, rgba(11px, 22px, 33px), 3px)" -> 1
                  // 7a. "linear(rgb(1, 2, 3, 5), rgb(1, 2, 3, 5))" -> 1 || "/(?<!\(.*[^)]),(?![^(]*\))/"
                  // 7b. "linear(rgb(1, 2, 3, 5) 1px, rgb(1, 2, 3, 5))" -> 1
                  // /(?<!\(*[^)]),(?![^(]*\))/ > fails 2.
                  // /(?<!\(.*[^)]),(?![^(]*\))/ > fails 7a.
                  detached: true,
                  layerLabel: (l: any, { values, property }: any) => {
                    return property.getProperty(PROPERTY_BG_TYPE).getOptionLabel(values[PROPERTY_BG_TYPE]);
                  },
                  toStyle(values: Record<string, string>, { name }: any) {
                    const type = values[PROPERTY_BG_TYPE];
                    let image = values[PROPERTY_BG_IMAGE];

                    if (type === 'color' && image.indexOf('linear-gradient') < 0) {
                      image = `linear-gradient(${image} 1%, ${image} 100%)`;
                    }

                    const result = {
                      ...values,
                      [PROPERTY_BG_IMAGE]: image,
                    };

                    return result;
                  },
                  fromStyle(style: Record<string, string>, { property, name, separatorLayers }: any) {
                    const sep = separatorLayers;
                    const props = property.getProperties();
                    let layers: any = [];

                    if (style[PROPERTY_IMAGE]) {
                      // Get layers from the `background-image` property
                      layers = property.__splitStyleName(style, PROPERTY_IMAGE, sep).map(getLayerFromBgImage);

                      // Update layers by inner properties
                      props.forEach((prop: any) => {
                        const id = prop.getId();
                        const propName = prop.getName();
                        if (propName === PROPERTY_IMAGE) return;
                        property.__splitStyleName(style, propName, sep)
                          .map((value: string) => ({ [id]: value || prop.getDefaultValue() }))
                          .forEach((inLayer: any, i: number) => {
                            layers[i] = layers[i] ? { ...layers[i], ...inLayer } : inLayer;
                          });
                      });
                    } else if (style[name]) {
                      // Partial support for the `background` property
                      // eslint-disable-next-line
                      layers = property.__splitStyleName(style, name, /(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/)
                        .map((value: string) => value.substring(0, value.lastIndexOf(')') + 1))
                        .map(getLayerFromBgImage);
                    }

                    return layers;
                  },
                  properties: [
                    {
                      property: PROPERTY_BG_TYPE,
                      type: 'radio',
                      default: 'image',
                      options: [
                        { id: BackgroundType.Image },
                        { id: BackgroundType.Gradient },
                        { id: BackgroundType.Color },
                      ]
                    },
                    {
                      // Specs: https://www.w3.org/TR/css-images-3/
                      // <url> | <gradient> (https://github.com/rafaelcaricio/gradient-parser)
                      // <gradient> = <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()>
                      // <linear-gradient()> = linear-gradient([ <angle> | to <side-or-corner> ]? , <color-stop-list>)
                      // <radial-gradient()> = radial-gradient([ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list>
                      //    radial-gradient(5em circle at top left, yellow, blue)
                      // <color-stop-list> = <linear-color-stop> , [ <linear-color-hint>? , <linear-color-stop> ]
                      //  fn(red 40%, white) | fn(white calc(-25px + 50%), blue)
                      // Regex
                      // <side-or-corner>: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
                      // <ending-shape>: /^circle|ellipse/i,
                      // <size>: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/, // | <length> | <length-percentage>{2}
                      // <position>: /^at/ // position: at top left, at 20px, at 10% 15%
                      property: PROPERTY_BG_IMAGE,
                      default: 'none', // url(), gradient, none
                    },
                    {
                      property: 'background-position',
                      type: 'composite',
                      // default: '0%', // left | center | right | top | bottom
                      properties: [
                        'background-position-x',
                        'background-position-y',
                      ].map(prop => ({
                        type: 'integer',
                        property: prop,
                        units: unitsSize,
                        default: '0px',
                      }))
                    },
                    {
                      // Keyword: contain | cover; One-value syntax; Two-value syntax
                      property: 'background-size',
                      type: 'composite',
                      properties: [
                        'background-size-x',
                        'background-size-y',
                      ].map(prop => ({
                        type: 'integer',
                        property: prop,
                        units: unitsSize,
                        default: 'auto',
                      }))
                    },
                    {
                      property: 'background-repeat', // box (x, y)
                      default: 'repeat',
                      type: 'select',
                      options: [ // background-repeat-x background-repeat-x
                        { id: 'repeat', label: 'Repeat' },
                        { id: 'repeat-x', label: 'Repeat x' },
                        { id: 'repeat-y', label: 'Repeat y' },
                        { id: 'no-repeat', label: 'No repeat' },
                        { id: 'space', label: 'Space' },
                        { id: 'round', label: 'Round' },
                      ]
                    },
                    {
                      property: 'background-attachment',
                      default: 'scroll',
                      type: 'select',
                      options: [
                        { id: 'scroll', label: 'Scroll' },
                        { id: 'fixed', label: 'Fixed' },
                      ]
                    },
                    {
                      property: 'background-origin',
                      default: 'padding-box',
                      type: 'select',
                      options: [
                        { id: 'padding-box', label: 'Padding box' },
                        { id: 'border-box', label: 'Border box' },
                        { id: 'content-box', label: 'Content box' },
                      ]
                    },
                  ]
                },
                {
                  property: 'background-color',
                  type: 'color',
                  default: 'none',
                },
                {
                  property: 'background-clip',
                  default: 'border-box',
                  type: 'select',
                  options: [
                    { id: 'border-box', label: 'Border box' },
                    { id: 'padding-box', label: 'Padding box' },
                    { id: 'content-box', label: 'Content box' },
                    { id: 'text', label: 'Text' },
                  ],
                  onChange({ to, property, opts }: any) {
                    const { value } = to;
                    if (value !== undefined) {
                      const isText = value === 'text';
                      property.__upTargetsStyle({
                        '-webkit-background-clip': isText ? value : '',
                        '-webkit-text-fill-color': isText ? 'transparent' : '',
                      }, opts);
                    }
                  },
                },
              ],
            }, {
              id: 'borders',
              name: 'Borders',
              properties: [
                {
                  extend: 'border-radius',
                  detached: true,
                },
                {
                  extend: 'border-width',
                  type: 'composite',
                  detached: true,
                  properties: [
                    'border-top-width',
                    'border-right-width',
                    'border-bottom-width',
                    'border-left-width',
                  ].map(prop => ({
                    type: 'integer',
                    property: prop,
                    default: '0',
                    units: unitsSize,
                  }))
                },
                {
                  extend: 'border-style',
                  type: 'composite',
                  detached: true,
                  properties: [
                    'border-top-style',
                    'border-right-style',
                    'border-bottom-style',
                    'border-left-style',
                  ].map(prop => ({
                    type: 'select',
                    property: prop,
                    default: 'none',
                    options: [
                      { id: 'none', label: 'None' },
                      { id: 'solid', label: 'Solid' },
                      { id: 'dotted', label: 'Dotted' },
                      { id: 'dashed', label: 'Dashed' },
                      { id: 'double', label: 'Double' },
                      { id: 'groove', label: 'Groove' },
                      { id: 'ridge', label: 'Ridge' },
                      { id: 'inset', label: 'Inset' },
                      { id: 'outset', label: 'Outset' },
                    ]
                  }))
                },
                {
                  extend: 'border-color',
                  type: 'composite',
                  detached: true,
                  properties: [
                    'border-top-color',
                    'border-right-color',
                    'border-bottom-color',
                    'border-left-color',
                  ].map(prop => ({
                    type: 'color',
                    property: prop,
                    default: 'currentColor',
                  }))
                },
              ],
            }, {
              id: 'effects',
              name: 'Effects',
              properties: [
                {
                  property: 'opacity',
                  type: 'integer',
                  min: 0,
                  max: 100,
                  default: '100',
                  units: ['%'],
                },
                {
                  property: 'mix-blend-mode',
                  type: 'select',
                  default: 'normal',
                  options: [
                    { id: 'normal', label: 'Normal' },
                    { id: 'multiply', label: 'Multiply' },
                    { id: 'screen', label: 'Screen' },
                    { id: 'overlay', label: 'Overlay' },
                    { id: 'darken', label: 'Darken' },
                    { id: 'lighten', label: 'Lighten' },
                    { id: 'color-dodge', label: 'Color dodge' },
                    { id: 'color-burn', label: 'Color burn' },
                    { id: 'hard-light', label: 'Hard light' },
                    { id: 'soft-light', label: 'Soft light' },
                    { id: 'difference', label: 'Difference' },
                    { id: 'exclusion', label: 'Exclusion' },
                    { id: 'hue', label: 'Hue' },
                    { id: 'saturation', label: 'Saturation' },
                    { id: 'color', label: 'Color' },
                    { id: 'luminosity', label: 'Luminosity' },
                  ]
                },
                { extend: 'cursor' },
                get2DimProp('overflow', {
                  x: overflowProps,
                  y: overflowProps,
                  mergable: true,
                }),
                {
                  extend: 'box-shadow',
                  fromStyle(style: Record<string, string>, { separatorLayers }: any) {
                    const input = style['box-shadow'] || '';
                    const result = input ? input.split(separatorLayers).map(value => {
                      const { x, y, blur, spread, inset, color } = parseBoxShadow(value);
                      return {
                        'box-shadow-h': x,
                        'box-shadow-v': y,
                        'box-shadow-blur': blur,
                        'box-shadow-spread': spread,
                        'box-shadow-color': color,
                        'box-shadow-type': inset ? 'inset' : '',
                      };
                    }) : [];
                    return result;
                  },
                },
                {
                  extend: 'text-shadow',
                  fromStyle(style: Record<string, string>, { separatorLayers }: any) {
                    const input = style['text-shadow'] || '';
                    const result = input ? input.split(separatorLayers).map(value => {
                      const { x, y, blur, color } = parseBoxShadow(value);
                      return {
                        'text-shadow-h': x,
                        'text-shadow-v': y,
                        'text-shadow-blur': blur,
                        'text-shadow-color': color,
                      };
                    }) : [];
                    return result;
                  },
                },
                getFilterProp(),
                getFilterProp('backdrop-filter'),
                {
                  property: 'transition',
                  type: 'stack',
                  layerLabel: (l: any, { values: v }: any) => `${capitalize(v['transition-property'])}: ${v['transition-duration']}`,
                  properties: [
                    {
                      property: 'transition-property',
                      type: 'select',
                      default: 'opacity',
                      options: [
                        // Size
                        'width', 'height', 'min-width', 'min-height', 'max-width', 'max-height',
                        // Layout
                        'padding', 'margin',
                        // Typography
                        'color', 'font-size', 'line-height', 'letter-height',
                        // Border
                        'border', 'border-radius', // 'border-color', 'border-width',
                        // Background
                        'background',
                        // Effects
                        'opacity', 'box-shadow', 'text-shadow', 'filter', 'backdrop-filter', 'transform',
                        // Extra
                        'all',
                      ].map(strToOption),
                    },
                    {
                      property: 'transition-duration',
                      type: 'integer',
                      default: '1s',
                      unit: unitsTime[0],
                      units: unitsTime,
                      min: 0,
                    },
                    {
                      property: 'transition-timing-function',
                      type: 'select',
                      default: 'ease',
                      options: [
                        { id: 'ease', label: 'Ease'},
                        { id: 'ease-in', label: 'Ease-In'},
                        { id: 'ease-in-out', label: 'Ease-In-Out'},
                        { id: 'ease-out', label: 'Ease-Out'},
                        { id: 'linear', label: 'Linear'},
                      ],
                    },
                    {
                      property: 'transition-delay',
                      type: 'integer',
                      default: '0s',
                      unit: unitsTime[0],
                      units: unitsTime,
                    },
                  ]
                },
                {
                  property: 'transform',
                  type: 'stack',
                  layerSeparator: ' ',
                  layerLabel: (l: any, { values, property }: any) => {
                    const label = property.getProperty('transform-name').getOptionLabel(values['transform-name']);
                    return `${capitalize(label)}: ${values['transform-value']}`;
                  },
                  fromStyle: fromStyleFnStack('transform'),
                  toStyle: toStyleFnStack('transform', '0'),
                  properties: [
                    {
                      property: 'transform-name',
                      type: 'select',
                      default: 'translateX',
                      options: [
                        { id: 'translateX', label: 'Move X', units: unitsSize },
                        { id: 'translateY', label: 'Move Y', units: unitsSize },
                        { id: 'translateZ', label: 'Move Z', units: unitsSize },
                        { id: 'rotateX', label: 'Rotate X', units: unitsAngle },
                        { id: 'rotateY', label: 'Rotate Y', units: unitsAngle },
                        { id: 'rotateZ', label: 'Rotate Z', units: unitsAngle },
                        { id: 'scale', label: 'Scale', units: unitsPercent },
                        { id: 'scaleX', label: 'Scale X', units: unitsPercent },
                        { id: 'scaleY', label: 'Scale Y', units: unitsPercent },
                        { id: 'scaleZ', label: 'Scale Z', units: unitsPercent },
                        { id: 'skewX', label: 'Skew X', units: unitsAngle },
                        { id: 'skewY', label: 'Skew Y', units: unitsAngle },
                      ],
                      onChange: handleTypeChange('transform-value'),
                    },
                    {
                      property: 'transform-value',
                      type: 'integer',
                      default: '0',
                    },
                  ]
                },
                get2DimProp('transform-origin', {
                  x: { default: '50%' },
                  y: { default: '50%' },
                }),
                {
                  property: 'backface-visibility',
                  type: 'radio',
                  default: 'visible',
                  options: [
                    { id: 'visible', label: 'Visible' },
                    { id: 'hidden', label: 'Hidden' },
                  ],
                },
                {
                  // Activate on parent element to enable 3D transforms on all of its children
                  property: 'perspective',
                  type: 'integer',
                  min: 0,
                  default: 'none',
                  units: unitsSize,
                },
                get2DimProp('perspective-origin', {
                  x: { default: '50%' },
                  y: { default: '50%' },
                }),
                {
                  property: 'transform-style',
                  type: 'radio',
                  default: 'flat',
                  options: [
                    { id: 'flat', label: '2D' },
                    { id: 'preserve-3d', label: '3D' },
                  ],
                },
              ],
            }
          ],
        },
        selectorManager: {
          componentFirst: true,
        },
        storageManager: {
          onStore: (data: any) => {
            const custom = getStore().appEditorStore.projectDataCustom;
            data.custom = custom ? JSON.parse(JSON.stringify(custom)) : {};
            return data;
          },
          // onLoad: (data: any) => {
          //   getStore().appEditorStore.setProjectDataCustom(data.custom);
          //   return data;
          // },
        },
        i18n: {
          messagesAdd: {
            en: localeEn,
          }
        },
        canvas: {
          // infiniteCanvas: true,
          customSpots: {
            select: true,
            hover: true,
            spacing: true,
            target: true,
            // resize: true,
          },
        },
    };

    return gjsOpts;
}