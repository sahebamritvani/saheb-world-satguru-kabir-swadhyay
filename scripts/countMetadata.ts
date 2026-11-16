import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/nitnem/prabhatPath.ts');
const code = fs.readFileSync(filePath, 'utf8');
const lines = code.split('\n');

let shabdarthCount = 0;
let bhavarthCount = 0;
let marmNoteCount = 0;

lines.forEach(line => {
  if (line.includes('shabdarth')) shabdarthCount++;
  if (line.includes('bhavarth')) bhavarthCount++;
  if (line.includes('marmNote')) marmNoteCount++;
});

console.log(`shabdarth: ${shabdarthCount}, bhavarth: ${bhavarthCount}, marmNote: ${marmNoteCount}`);
