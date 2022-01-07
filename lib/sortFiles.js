const fs = require('fs');
const path = require('path/posix');

const fileTypes = {
  image: ['.png', '.jpg', '.gif', '.jfif'],
  exe: ['.exe', '.msi'],
  pdf: ['.pdf'],
  music: ['.mp3', '.mp4'],
  torrent: ['.torrent'],
  text: ['.txt', '.doc', '.docx'],
};

const checkFileType = (file) => {
  const result = file.split('.');
  return `.${result[result.length - 1]}`;
};

const moveFile = (pathToDir, file, newFolder) => {
  fs.renameSync(
    path.join(pathToDir, file),
    path.join(pathToDir, newFolder, file)
  );
};

const sortFiles = (files, pathToDir) => {
  files.forEach((file) => {
    const fileType = checkFileType(file);

    for (let key in fileTypes) {
      if (key == file) continue;
      if (fileTypes[key].includes(fileType)) {
        moveFile(pathToDir, file, key);
      }
    }
  });
};

module.exports = { sortFiles };
