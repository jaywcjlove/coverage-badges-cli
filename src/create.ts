import fs from 'fs-extra';
import path from 'path';
import { RunArgvs } from '.';
import { badge, BadgenOptions } from './badges';

export type SummaryTotal = {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

export type SummaryItem = {
  lines: SummaryTotal;
  statements: SummaryTotal;
  functions: SummaryTotal;
  branches: SummaryTotal;
}

export interface Summary extends Record<string, SummaryItem> {
  total: SummaryItem;
}

export function create(argvs: RunArgvs) {
  const sourcePath = path.resolve(process.cwd(), argvs.source);
  const svgPath = path.resolve(process.cwd(), argvs.output);
  if (!fs.existsSync(sourcePath)) {
    console.log(
      `\x1b[31mErr Source Path:\x1b[0m ${path.relative(process.cwd(), sourcePath)}\n`,
      `> please specify the file directory\n`,
      `> \x1b[35mnpm\x1b[0m coverage-badges-cli \x1b[33m--source\x1b[0m coverage/coverage-summary.json`
    );
    return;
  }
  const source: Summary = require(sourcePath);
  const svgStr = badge(argvs as BadgenOptions, source);
  fs.ensureDirSync(path.dirname(svgPath));
  fs.writeFileSync(svgPath, svgStr);
  console.log(`\nCoverage Badges: \x1b[32;1m${path.relative(process.cwd(), svgPath)}\x1b[0m\n`);
}