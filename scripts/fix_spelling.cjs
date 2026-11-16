const fs = require('fs');
const path = require('path');

const TARGET_DIRS = [
  path.join(__dirname, '../src'),
  path.join(__dirname, '../scripts'),
  path.join(__dirname, '../public')
];

const ALLOWED_EXTENSIONS = ['.ts', '.tsx', '.json', '.cjs', '.js', '.webmanifest', '.html', '.svg', '.css', '.md'];

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updated = content;

    // Replace Gurmukhi "ਸਾਹੇਬ" with "ਸਾਹੇਬ"
    updated = updated.replaceAll('ਸਾਹੇਬ', 'ਸਾਹੇਬ');

    // Replace Devanagari "साहेब" with "साहेब"
    updated = updated.replaceAll('साहेब', 'साहेब');

    if (content !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Updated spelling in: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

function traverseDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      traverseDir(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (ALLOWED_EXTENSIONS.includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

console.log('Starting spelling replacement (ਸਾਹੇਬ -> ਸਾਹੇਬ, साहेब -> साहेब)...');
for (const dir of TARGET_DIRS) {
  traverseDir(dir);
}
console.log('Spelling replacement complete.');
