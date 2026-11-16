import fs from 'fs';
import path from 'path';

for (const fileName of ['prabhatPath.ts', 'sandhyaPath.ts']) {
  const filePath = path.join(process.cwd(), 'src/data/nitnem', fileName);
  let code = fs.readFileSync(filePath, 'utf8');

  code = code.replace(/\n  \}\s*\n\s*\n\s*\{/g, '\n  },\n\n  {');

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Added commas between sections in ${fileName}`);
}
