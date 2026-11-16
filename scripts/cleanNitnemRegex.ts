import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/data/nitnem');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const outputLines: string[] = [];
  let skippingTarget: string | null = null;
  let braceDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (skippingTarget !== null) {
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '{') {
          braceDepth++;
        } else if (char === '}') {
          braceDepth--;
        }
      }

      if (braceDepth <= 0) {
        skippingTarget = null;
        braceDepth = 0;
      }
      continue;
    }

    const match = line.match(/^\s*(shabdarth|bhavarth|marmNote)\s*:\s*(.*)$/);
    if (match) {
      const target = match[1];
      const rest = match[2].trim();

      if (rest.startsWith('{')) {
        skippingTarget = target;
        braceDepth = 0;
        for (let j = 0; j < rest.length; j++) {
          const char = rest[j];
          if (char === '{') braceDepth++;
          else if (char === '}') braceDepth--;
        }
        if (braceDepth <= 0) {
          skippingTarget = null;
          braceDepth = 0;
        }
      }
      continue;
    }

    outputLines.push(line);
  }

  fs.writeFileSync(filePath, outputLines.join('\n'), 'utf8');
  console.log(`Cleaned metadata from ${file}`);
});
