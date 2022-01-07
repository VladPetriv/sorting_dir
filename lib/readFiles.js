const fs = require('fs');

const readFiles = (pathToDir) => {
  const files = [];
  const data = fs.readdirSync(pathToDir);
  data.forEach((file) => {
    files.push(file);
  });
  return files;
};

module.exports = { readFiles };
