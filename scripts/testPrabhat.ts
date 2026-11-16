import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

const filePath = path.join(process.cwd(), 'src/data/nitnem/prabhatPath.ts');
const code = fs.readFileSync(filePath, 'utf8');
const lines = code.split('\n');
lines.splice(449, 1);
const idx = lines.findIndex((l, i) => i > 1550 && l.trim() === '},');
if (idx !== -1) {
  lines.splice(idx, 1);
}

const modCode = lines.join('\n').replace(
  /export\s+const\s+\w+\s*:\s*NitnemSection\[\]\s*=\s*/,
  'globalThis.nitnemData = '
);
try {
  esbuild.transformSync(modCode, {
    loader: 'ts',
    format: 'cjs',
    target: 'esnext',
  });
  console.log('Transform succeeded for prabhatPath.ts!');
} catch (e: any) {
  if (e.errors) {
    e.errors.forEach((err: any) => {
      console.log(`Line ${err.location.line}, Col ${err.location.column}: ${err.text}`);
    });
  }
}
