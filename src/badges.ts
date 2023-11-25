import { badgen } from 'badgen';
import { readFileSync } from 'fs';
import svgToTinyDataUri from 'mini-svg-data-uri';
import { Summary } from './create';

// Copied from `badgen` because it's not exported
export type StyleOption = 'flat' | 'classic';

export interface BadgenOptions {
  status: string;
  subject?: string;
  color?: string;
  label?: string;
  style?: StyleOption;
  jsonPath?: string;
  labelColor?: string;
  icon?: string;
  iconWidth?: number;
  scale?: number;
}

export interface BadgeOption extends BadgenOptions {
}

const getIconString = (path: string) => {
  return readFileSync(path, 'utf8');
}


export function badge(option: BadgeOption, summary: Summary) {
  const { label = 'coverage', style = 'classic', jsonPath = 'totals.summary' } = option || {}
  let pct: any = summary;
  jsonPath.split(".").forEach(key => pct[key]);
  if (typeof pct !== 'number') {
    throw new Error(`${jsonPath} evaluates to ${pct} and is not a suitable path in the JSON coverage data`);
  }
  const colorData = {
    '#49c31a': [100],
    '#97c40f': [99.99, 90],
    '#a0a127': [89.99, 80],
    '#cba317': [79.99, 60],
    '#ce0000': [59.99, 0],
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

  const badgenArgs: BadgenOptions = {
    style,
    label,
    status: `${pct < 0 ? 'Unknown' : `${pct}%`}`,
    color: (color || 'e5e5e5').replace(/^#/, ''),
  };

  if(option.icon) {
    const svgString = getIconString(option.icon) as string;
    const svgDataUri = svgToTinyDataUri(svgString);

    badgenArgs.icon = svgDataUri;
  }

  return badgen(badgenArgs);
}