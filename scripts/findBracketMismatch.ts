import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/nitnem/prabhatPath.ts');
const code = fs.readFileSync(filePath, 'utf8');
const lines = code.split('\n');

let bracketCount = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const c = line[j];
    if (c === '[') bracketCount++;
    else if (c === ']') {
      bracketCount--;
      if (bracketCount < 0) {
        console.log(`Bracket mismatch (extra ']') at line ${i + 1}, col ${j + 1}`);
      }
    }
  }
}
console.log(`Final bracket count: ${bracketCount}`);
