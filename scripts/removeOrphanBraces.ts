import fs from 'fs';
import path from 'path';

for (const fileName of ['prabhatPath.ts', 'sandhyaPath.ts']) {
  const filePath = path.join(process.cwd(), 'src/data/nitnem', fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');

  const newLines: string[] = [];
  let depth = 0;
  let bracketDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let skipLine = false;

    let lineDepthChange = 0;
    let lineBracketChange = 0;
    for (let j = 0; j < line.length; j++) {
      const c = line[j];
      if (c === '{') lineDepthChange++;
      else if (c === '}') lineDepthChange--;
      else if (c === '[') lineBracketChange++;
      else if (c === ']') lineBracketChange--;
    }

    if (depth + lineDepthChange < 0 || bracketDepth + lineBracketChange < 0) {
      if (line.trim() === '},' || line.trim() === '}') {
        skipLine = true;
      }
    }

    if (!skipLine) {
      for (let j = 0; j < line.length; j++) {
        const c = line[j];
        if (c === '{') depth++;
        else if (c === '}') depth--;
        else if (c === '[') bracketDepth++;
        else if (c === ']') bracketDepth--;
      }
      newLines.push(line);
    } else {
      console.log(`Dropped orphan line in ${fileName} at line ${i + 1}: ${line}`);
    }
  }

  fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
  console.log(`Processed ${fileName}`);
}
