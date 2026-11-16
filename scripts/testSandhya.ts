import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

const filePath = path.join(process.cwd(), 'src/data/nitnem/sandhyaPath.ts');
const code = fs.readFileSync(filePath, 'utf8');
const modCode = code.replace(
  /export\s+const\s+\w+\s*:\s*NitnemSection\[\]\s*=\s*/,
  'globalThis.nitnemData = '
);
try {
  esbuild.transformSync(modCode, {
    loader: 'ts',
    format: 'cjs',
    target: 'esnext',
  });
  console.log('SandhyaPath transform succeeded!');
} catch (e: any) {
  console.error('SandhyaPath transform failed:', e.errors);
}
