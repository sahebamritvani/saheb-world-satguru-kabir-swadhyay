import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/nitnem/prabhatPath.ts');
const code = fs.readFileSync(filePath, 'utf8');
const lines = code.split('\n');

let depth = 0;
let bracketDepth = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const c = line[j];
    if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '[') bracketDepth++;
    else if (c === ']') bracketDepth--;
    if (bracketDepth < 0 || depth < 0) {
      console.log(`First negative at line ${i + 1}, col ${j + 1}: bracketDepth=${bracketDepth}, depth=${depth} | ${line}`);
      process.exit(0);
    }
  }
}
