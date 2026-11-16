import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

const dir = path.join(process.cwd(), 'src/data/nitnem');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

async function run() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const code = fs.readFileSync(filePath, 'utf8');

    const match = code.match(/export\s+const\s+(\w+)\s*:\s*NitnemSection\[\]\s*=\s*/);
    if (!match) {
      console.log(`Skipping ${file} - no matching export found`);
      continue;
    }
    const varName = match[1];

    const modCode = code.replace(
      /export\s+const\s+\w+\s*:\s*NitnemSection\[\]\s*=\s*/,
      'globalThis.nitnemData = '
    );

    let result;
    try {
      result = await esbuild.transform(modCode, {
        loader: 'ts',
        format: 'cjs',
        target: 'esnext',
      });
    } catch (e: any) {
      console.error(`Esbuild error in ${file}:`, e.errors);
      throw e;
    }

    const fn = new Function(result.code + '; return globalThis.nitnemData;');
    const sections = fn();

    if (Array.isArray(sections)) {
      for (const section of sections) {
        if (section.verses && Array.isArray(section.verses)) {
          for (const verse of section.verses) {
            delete verse.shabdarth;
            delete verse.bhavarth;
            delete verse.marmNote;
          }
        }
      }
    }

    const newTsContent = `import { NitnemSection } from '../../types';\n\nexport const ${varName}: NitnemSection[] = ${JSON.stringify(sections, null, 2)};\n`;

    fs.writeFileSync(filePath, newTsContent, 'utf8');
    console.log(`Successfully cleaned and generated ${file}`);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
