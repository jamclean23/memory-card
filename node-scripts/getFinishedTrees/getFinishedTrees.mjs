import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

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

let result = attrTxt.filter((line) => {
    return line[0] && line[0] != '-' && line.slice(0, 4) != 'Icon';
});

console.log(result);