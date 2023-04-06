import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

let resultObj = {};

// Get attribution.txt
const workingDir = path.dirname(fileURLToPath(import.meta.url));
const pathToAttrTxt = path.join(workingDir, '..\\..\\', 'attribution.txt');
console.log('\nReading data from attributions.txt...');
let attrTxt;
try {
    attrTxt = await fs.promises.readFile(pathToAttrTxt, 'utf-8');
    console.log('Done.');
    // Parse to lines
    attrTxt = attrTxt.toString().replaceAll('\r', '').split('\n');
} catch (error) {
    console.log(error);
}


// Iterate through and build object
let lastCatRead = '';
let lastTypeRead = '';
attrTxt.forEach((line) => {
    if (line[0] && !(line[0] === '-')) {
        lastCatRead = line;
        resultObj[line] = {};
    } else if (line[0] === '-') {
        // Parse out type name and http
        resultObj[lastCatRead][[line.split(': ')[0].split('- ')[1]]] = line.split(': ')[1];
    }
});

console.log('\nData to be written:');
console.log(resultObj);

console.log('\nWriting JSON to ./src/index/assets/attributions.json...');
try {
    fs.promises.writeFile(path.join(workingDir, '..\\..\\src\\index\\assets' ,'attributions.json'), JSON.stringify(resultObj));
    console.log('Done.\n');
} catch (error) {
    console.log(error);
}

