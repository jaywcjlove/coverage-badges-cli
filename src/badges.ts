import { badgen } from 'badgen';
import { readFileSync } from 'fs';
import svgToTinyDataUri from 'mini-svg-data-uri';
import get from 'lodash.get';

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
  arbitrary?: boolean;
}

export interface BadgeOption extends BadgenOptions {}

const getIconString = (path: string) => {
  return readFileSync(path, 'utf8');
}

type ColorData = Record<string, number[]>;

const defaultColorData: ColorData = {
  '#49c31a': [100],
  '#97c40f': [99.99, 90],
  '#a0a127': [89.99, 80],
  '#cba317': [79.99, 60],
  '#ce0000': [59.99, 0],
}

export function badge(option: BadgeOption, summary: object) {
  const { label = 'coverage', style = 'classic', jsonPath = 'total.statements.pct', color: optionColor, arbitrary, ...otherOption } = (option || {}) as BadgenOptions
  let pct: any = summary;
  pct = get(summary, jsonPath, 0);

  if (!arbitrary && !isNaN(Number(pct))) {
    pct = Number(pct);
  }

  if (!arbitrary && typeof pct !== 'number') {
    throw new Error(`${jsonPath} evaluates to ${JSON.stringify(pct)} and is not a suitable path in the JSON coverage data`);
  }
  const colorData = defaultColorData
  const color = Object.keys(colorData).find((value: keyof typeof colorData, idx) => {
    if (colorData[value].length === 1 && pct >= colorData[value][0]) {
      return true
    }
    if (colorData[value].length === 2 && pct <= colorData[value][0] && pct >= colorData[value][1]) {
      return true
    }
    return false;
  });

  const suffix = arbitrary ? "" : "%"
  const badgenArgs: BadgenOptions = {
    ...otherOption,
    style,
    label,
    status: `${pct < 0 ? 'Unknown' : `${pct}${suffix}`}`,
    color: (color || 'e5e5e5').replace(/^#/, ''),
  };

  if (optionColor) {
    badgenArgs.color = optionColor.replace(/^#/, '');
  }

  if(option.icon) {
    const svgString = getIconString(option.icon) as string;
    const svgDataUri = svgToTinyDataUri(svgString);

    badgenArgs.icon = svgDataUri;
  }

  console.log("badgenArgs", badgenArgs)
  return badgen(badgenArgs);
}
