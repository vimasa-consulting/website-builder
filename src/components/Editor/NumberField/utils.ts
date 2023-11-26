export type UnitOption = string | { id: string, label: string };

export type ValidUnit = (
    unit: string,
    units: UnitOption[],
    opts?: { partial?: boolean }
  ) => boolean;


/**
 * Start pan number value
 * @param initialValue Initial value
 * @param clientX Client X position
 * @param update Update function which triggers on each new value
 */
 export const panNumberValue = (
    initialValue: number | string,
    startValue: number,
    update: Function,
    options: any = {}
  ) => {
    const initValue = parseInt(`${initialValue}`, 10) || 0;
    let newVal = initValue;

    // TODO use throttle(fn, 50)
    const onPropSlide = (evt: MouseEvent) => {
      const { min, max, step = 1 } = options;
      const diff = evt.clientY - startValue;
      newVal = initValue - diff * step;

      if (typeof min !== 'undefined' && newVal < min) {
        newVal = min;
      }

      if (typeof max !== 'undefined' && newVal > max) {
        newVal = max;
      }

      update(newVal, true);
    };

    const onPropSlideComplete = () => {
      window.removeEventListener('mousemove', onPropSlide);
      window.removeEventListener('mouseup', onPropSlideComplete);
      update(newVal);
    };

    window.addEventListener('mousemove', onPropSlide);
    window.addEventListener('mouseup', onPropSlideComplete);
  };

/**
 * Check if the unit is valid (has a reference in passed `units`).
 */
 export const isValidUnit: ValidUnit = (unit, units, opts = {}) => {
  const { partial } = opts;
  const equal = (u: string, unit: string) => u === unit || (partial && u.startsWith(unit));
  return units.some((u) => (typeof u === 'string' ? equal(u, unit) : equal(u.id, unit)));
};

// export const onLabelMouseDown: React.MouseEventHandler<HTMLDivElement> = (evt) => {
//     const scrubOpts: any = {};
//     if (props.min || props.min === 0) scrubOpts.min = parseInt(`${props.min}`);
//     if (props.max || props.max === 0) scrubOpts.max = parseInt(`${props.max}`);
//     if (props.step) scrubOpts.step = parseFloat(`${props.step}`);

//     slideNumberValue(
//       `${rest.value}`,
//       evt.clientX,
//       (value: number) => rest.onChange?.(`${value}`),
//       scrubOpts
//     );
// };

// export type ValueUnit = (props: {
//     input: string;
//     min?: NumberFieldProps['min'];
//     max?: NumberFieldProps['max'];
//     units?: SelectOption[];
// }) => {
//     value: string;
//     unit: string | null;
// };

//   /**
//    * Extract numeric value and unit from an input string.
//    */
//   export const getValueUnit: ValueUnit = ({ input, min, max, units = [] }) => {
//     let unit: string | null = null;
//     let value = input;
//     let canBeNegative = typeof min === 'undefined' || parseFloat(`${min}`) < 0;

//     // Support exceptions for negative values
//     if (canBeNegative && ['0-', '-0', '-'].includes(input)) {
//       value = '-';
//     } else {
//       // Support value with units (eg. `100%`)
//       const intValue = `${parseFloat(input) || 0}`;
//       const minMaxValue = getMinMaxValue({ min, max, value: intValue });
//       value = intValue;

//       // Try to extract units
//       if (intValue !== input) {
//         const tempUnit = input.replace(intValue, '');

//         if (tempUnit) {
//           if (isValidUnit(tempUnit, units)) {
//             value = minMaxValue;
//             unit = tempUnit;
//           } else if (isValidUnit(tempUnit, units, { partial: true })) {
//             value = `${minMaxValue}${tempUnit}`;
//           }
//         }
//       } else {
//         value = minMaxValue;
//       }
//     }

//     return { value, unit };
//   };