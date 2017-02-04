const fs = require('fs');
const babelify = require('babelify');
const browserify = require('browserify');

const generalFileRegex = /(\.)(.)+/gi;
const baseDir = "./src";
const outputDir = "./public";

function build() {
  let directories = [new Directory(baseDir)];

  for (let i = 0; i < directories.length; i++) {
    const directory = directories[i];

    const files = fs.readdirSync(directory.path);
    for (x = 0; x < files.length; x++) {
      const file = files[x];
      if (file.match(generalFileRegex) !== null) {
        directory.addFile(directory.path+'/'+file);
      } else {
        directories.push(new Directory(directory.path+'/'+file));
      }
    }

    directory.bundle();
  }
}

function bundle(files, name) {
  browserify()
    .transform(babelify, {presets: ["es2015", "react"]})
    .require(files)
    .bundle()
    .on('error', (err) => {
      console.log(`Error: ${err.message}`);
    })
    .pipe(fs.createWriteStream(`${outputDir}/${name}.js`));
}

class Directory {
  constructor(path) {
    this.path = path;
    this.files = [];

    let name = path.split('/');
    name = name[name.length-1];
    switch(name) {
      case "":
        this.name = "bundle";
        break;
      case "src":
        this.name = "index";
        break;
      default:
        this.name = name;
        break;
    }
  }

  addFile(file) {
    this.files.push(file);
  }

  bundle() {
    if (this.files.length > 0) {
      console.log(`Bundling ${this.path} -> ${this.name}.js`);
      bundle(this.files, this.name);
    }
  }
}

build();
