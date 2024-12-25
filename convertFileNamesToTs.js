const fs = require('fs');
const path = require('path');

/**
 * Recursively traverse the directory to find and convert files.
 * @param {string} dir - The directory to traverse.
 */
function traverseDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (stat.isFile()) {
      convertFile(fullPath);
    }
  });
}

/**
 * Convert a file based on its extension and directory.
 * @param {string} filePath - The path of the file to convert.
 */
function convertFile(filePath) {
  const extname = path.extname(filePath);
  const basename = path.basename(filePath, extname);
  const dir = path.dirname(filePath);

  // Determine if the file is in 'components' or 'pages' directory
  const isComponentOrPage =
    dir.includes('src/components') || dir.includes('src/pages');

  if (extname === '.js') {
    const newFilePath = isComponentOrPage
      ? path.join(dir, `${basename}.tsx`)
      : path.join(dir, `${basename}.ts`);
    fs.renameSync(filePath, newFilePath);
    console.log(`Converted: ${filePath} -> ${newFilePath}`);
  }
}

// Define the path to the 'src' directory
const srcDir = path.join(process.cwd(), 'src');

// Check if the 'src' directory exists
if (fs.existsSync(srcDir)) {
  // Start the conversion process from the 'src' directory
  traverseDirectory(srcDir);
} else {
  console.error(
    `The 'src' directory does not exist in the current path: ${process.cwd()}`
  );
}
