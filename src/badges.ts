import { badgen } from 'badgen';
import { readFileSync } from 'fs';
import svgToTinyDataUri from 'mini-svg-data-uri';
import { Summary } from './create';

// Copied from `badgen` because it's not exported
type StyleOption = 'flat' | 'classic';
interface BadgenOptions {
  status: string;
  subject?: string;
  color?: string;
  label?: string;
  labelColor?: string;
  style?: StyleOption;
  icon?: string;
  iconWidth?: number;
  scale?: number;
}

export type SummaryType = 'lines' | 'statements' | 'functions' | 'branches';
export interface BadgeOption extends BadgenOptions {
  type?: SummaryType;
}

const getIconString = (path: string) => {
  return readFileSync(path, 'utf8');
}


export function badge(option: BadgeOption, summary: Summary) {
  const { label = 'coverage', style = 'classic', type = 'statements' } = option || {}
  const { total } = summary;
  if (typeof total[type].pct !== 'number') {
    total[type].pct = -1
  }
  const { pct } = total[type];
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