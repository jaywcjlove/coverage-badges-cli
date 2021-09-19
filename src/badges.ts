import { Summary } from './create';
import { RunArgvs } from './';

export function badge(option: RunArgvs, summary: Summary) {
  const { total } = summary;
  const { pct } = total.statements;
  const sizeData: number[][] = [
    [90, 190, 755], [96, 250, 775], [104, 330, 815], [108, 330, 835], [114, 340, 875]
  ];
  const [width, textLength, textX] = sizeData[String(pct).length - 1] || sizeData[0];
  const colorData = {
    '#49c31a': [100],
    '#97c40f': [99, 90],
    '#a0a127': [89, 80],
    '#cba317': [79, 60],
    '#ce0000': [59, 0],
  }
  const color = Object.keys(colorData).find((value: keyof typeof colorData, idx) => {
    if (colorData[value].length === 1 && pct >= colorData[value][0]) {
      return true
    }
    if (colorData[value].length === 2 && pct <= colorData[value][0] && pct >= colorData[value][1]) {
      return true
    }
    return false;
  });
  const rx = option.style === 'flat-square' ? 0 : 3;
  return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="20" role="img" aria-label="coverage: ${pct}%">
  <title>coverage: ${pct}%</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
    <stop offset="1" stop-opacity=".1" />
  </linearGradient>
  <clipPath id="r">
    <rect width="${width}" height="20" rx="${rx}" fill="#fff" />
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="61" height="20" fill="#555"/>
    <rect x="61" width="143" height="20" fill="${color}"/>
    <rect width="${width}" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text aria-hidden="true" x="315" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="510">coverage</text>
    <text x="315" y="140" transform="scale(.1)" fill="#fff" textLength="510">coverage</text>
    <text aria-hidden="true" x="${textX}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" >${pct}%</text>
    <text x="${textX}" y="140" transform="scale(.1)" fill="#fff" >${pct}%</text>
  </g>
</svg>
  `
}