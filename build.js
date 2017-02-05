const fs = require('fs');
const path = require('path');
const babelify = require('babelify');
const cssify = require('browserify-css');
const browserify = require('browserify');

const generalFileRegex = /(\.)(.)+/gi;
const baseDir = "./src";
const outputDir = "./public";

function build() {
  let directories = [];

  const files = fs.readdirSync(baseDir);
  for (x = 0; x < files.length; x++) {
    const file = files[x];
    if (file.match(generalFileRegex) === null) {
      directories.push(file);
    }
  }

  for (let i = 0; i < directories.length; i++) {
    const dirName = directories[i];
    console.log(`${dirName}/index.jsx -> ${dirName}.js`);
    bundle(`${baseDir}/${dirName}/index.jsx`, dirName);
  }
}

function bundle(files, outputName) {
  browserify()
    .transform(babelify, {presets: ["es2015", "react"]})
    .transform(cssify)
    .add(files)
    .bundle()
    .on('error', (err) => {
      console.log(`Error: ${err.message}`);
    })
    .pipe(fs.createWriteStream(`${outputDir}/${outputName}.js`));
}

build();
