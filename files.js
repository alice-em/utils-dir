const fs = require('fs');
const path = require('path');

let folder = 'Path/To/Folder';
let counter = '';

let analysis = (folder, counter) => {
  let files = fs.readdirSync(folder);
  for (let i = 0; i < files.length; i++) {
    let fullpath = path.join(folder, files[i]);
    if (fs.statSync(fullpath).isFile() && files[i][0] != '.') {
      console.log(`${counter}📄 ${path.basename(files[i], path.extname(files[i]))}`);
    } else if (fs.statSync(fullpath).isDirectory() && files[i][0] != '.') {
      console.log(`${counter}📂 ${files[i]}`);
      counter = `${counter}  `;
      analysis(fullpath, counter);
      counter = counter.slice(2);
    } else {
      // do nothing
    }
  }
}

analysis(folder, counter);
