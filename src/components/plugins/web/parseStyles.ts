/*
Padding:
<div style="margin-top: 20px; padding: 10px;">
  Padding: 10px;
</div>
<div style="margin-top: 20px; padding: 10px 20px;">
  Padding: 10px 20px;
</div>
<div style="margin-top: 20px; padding: 10px 20px 30px;">
  Padding: 10px 20px 30px;
</div>
<div style="margin-top: 20px; padding: 10px 20px 30px 40px;">
  Padding: 10px 20px 30px 40px;
</div>
<div style="margin-top: 20px; padding-top: 10px">
  Padding-top: 10px
</div>
<div style="margin-top: 20px; padding-top: 10px; padding-left: 20px">
  Padding-top: 10px; padding-left: 20px;
</div>
<div style="margin-top: 20px; padding: 30px; padding-top: 10px; padding-left: 20px">
  Padding: 30px; padding-top: 10px; padding-left: 20px
</div>

// fromStyle: (style: Record<string, string>) => {
//   const values: Record<string, string> = {};

//   if (Object.keys(style).some(prop => /^margin/.test(prop))) {
//     const [valT, valR, valB, valL] = parse4NumValues(style.margin);
//     values['margin-top'] = style['margin-top'] || valT;
//     values['margin-right'] = style['margin-right'] || valR;
//     values['margin-bottom'] = style['margin-bottom'] || valB;
//     values['margin-left'] = style['margin-left'] || valL;
//   }

//   return values;
// },
// toStyle: (values: Record<string, string>, opts: any) => {
//   const valT = values['margin-top'];
//   const valR = values['margin-right'];
//   const valB = values['margin-bottom'];
//   const valL = values['margin-left'];
//   const style: Record<string, string> = {};

//   if (valT || valR || valB || valL) {
//     let margin = `${valT} ${valR} ${valB} ${valL}`;
//     if ([valT, valR, valB].every(v => v === valL)) {
//       margin = `${valT}`;
//     } else if (valR === valL) {
//       if (valT === valB) {
//         margin = `${valT} ${valR}`;
//       } else {
//         margin = `${valT} ${valR} ${valB}`;
//       }
//     }
//     style.margin = margin;
//   }
//   return style;
// }
*/
export const parse4NumValues = (input: string) => {
  const parts = (input || '').split(' ');
  let valT = parts[0];
  let valR = parts[0];
  let valB = parts[0];
  let valL = parts[0];
  if (parts.length === 4) {
    valT = parts[0];
    valR = parts[1];
    valB = parts[2];
    valL = parts[3];
  } else if (parts.length === 3) {
    valT = parts[0];
    valR = parts[1];
    valL = parts[1];
    valB = parts[2];
  } else if (parts.length === 2) {
    valT = parts[0];
    valR = parts[1];
    valL = parts[1];
    valB = parts[0];
  }

  return [valT, valR, valB, valL];
}

export default function onBeforeStyle(style: any) {
  const newStyle: any = {};
  if (style.padding) {
    const pad = style.padding.split(' ');
    let valT = pad[0];
    let valR = pad[0];
    let valB = pad[0];
    let valL = pad[0];
    if (pad.length === 4) {
      valT = pad[0];
      valR = pad[1];
      valB = pad[2];
      valL = pad[3];
    } else if (pad.length === 3) {
      valT = pad[0];
      valR = pad[1];
      valL = pad[1];
      valB = pad[2];
    } else if (pad.length === 2) {
      valT = pad[0];
      valR = pad[1];
      valL = pad[1];
      valB = pad[0];
    }
    newStyle['padding-top'] = style['padding-top'] || valT;
    newStyle['padding-right'] = style['padding-right'] || valR;
    newStyle['padding-bottom'] = style['padding-bottom'] || valB;
    newStyle['padding-left'] = style['padding-left'] || valL;
    delete style.padding;
  }
  return {
    ...style,
    ...newStyle,
  };
}