// utils-dir
// For pulling up information on folders and file numbers

const color = require('colors');
const fs = require('fs');
const path = require('path');

let analysis, count, folder, relative;

count = 0;
folder = 'path';
relative = '/'

analysis = (folder, count, relative) => {
  let files = fs.readdirSync(folder);
  for (let i = 0; i < files.length; i++) {
    if (fs.statSync(path.join(folder, files[i])).isFile()) {
      count++;
    } else if (fs.statSync(path.join(folder, files[i])).isDirectory()) {
      let newCount = 0;
      let newFolder = path.join(folder, files[i]);
      let newRelative = path.join(relative, files[i]);
      analysis(newFolder, newCount, newRelative);
    } else {
      console.log(`ERR! :: File ${path.join(relative, files[i])}`.red);
      break;
    }
  }
  console.log(`:: ${relative}\n:: File total: ${count}`);
}

analysis(folder, count, relative);
