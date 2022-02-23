import { badgen } from 'badgen';
import { Summary } from './create';

export type BadgeOption = {
  label?: string;
  style?: 'flat' | 'classic'
}

export function badge(option: BadgeOption, summary: Summary) {
  const { label = 'coverage', style = 'classic' } = option || {}
  const { total } = summary;
  const { pct } = total.statements;
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
  return badgen({
    style, label,
    status: `${pct}%`,
    color: color.replace(/^#/, ''),
  });
}