/**
 * Bob was here, and he made this
 */

const fs = require('fs');
const envify = require('envify/custom');
const uglifyjs = require('uglify-js');
const scssify = require('scssify');
const browserify = require('browserify');

const generalFileRegex = /(\.)(.)+/gi;
const baseDir = "./src";
const outputDir = "./assets/react";
const entryFile = "index.jsx";

process.env.NODE_ENV = 'production';

/**
 * Builds the src directory
 */
function build() {
	if (!fs.existsSync(outputDir)){
		fs.mkdirSync(outputDir);
	}

	let directories = [];

	// Searches through the src directory and adds all subfolders to an array
	const files = fs.readdirSync(baseDir);
	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		// finds the subfolders (In this case anything that matches the regex /(\.)(.)+/gi)
		if (file.match(generalFileRegex) === null) {
			const dirFiles = fs.readdirSync(`${baseDir}/${file}`);
			// Looks for the entry file before adding to the directory array
			if (dirFiles.includes(entryFile)) {
				directories.push(file);
			}
		}
	}

	console.log('Bundling production files...');

	// Goes through each subfolder to bundle them
	// Bundles index.jsx into a js file in assets named after the subfolder
	for (let i = 0; i < directories.length; i++) {
		const dirName = directories[i];
		// Nice looking log
		console.log(`${dirName}/index.jsx -> ${dirName}.js`);
		bundle([`${baseDir}/${dirName}/index.jsx`], dirName);
	}
}

/**
 * Bundles files together into outputName.js
 * @param {Array} files array of the file urls
 * @param {string} outputName name of the output file (.js added automatically)
 * @example
 * bundle(["./src/index/index.jsx"], "index");
 */
function bundle(files, outputName) {
	browserify()
		.transform(scssify)
		.transform(envify({NODE_ENV: 'production'}))
		.transform('uglifyify', {global: true})
		.add(files)
		.on('error', (err) => {
			console.log(err);
		})
		.bundle()
		.pipe(fs.createWriteStream(`${outputDir}/${outputName}.js`).on('close', () => {
			const test = uglifyjs.minify(fs.readFileSync(`${outputDir}/${outputName}.js`, 'utf8'));
			fs.writeFileSync(`${outputDir}/${outputName}.js`, test.code);
		}));
}

// Run the script
build();
