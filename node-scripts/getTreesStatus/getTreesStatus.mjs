import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const workingDir = path.dirname(fileURLToPath(import.meta.url));

console.log('\n### Generating list of current and unfinished trees. ###');


async function getFinishedTrees () {
    // Get attribution.txt
    let attrTxt;
    const pathToAttrTxt = path.join(workingDir, '..\\..\\', 'attribution.txt');
    try {
        attrTxt = await fs.promises.readFile(pathToAttrTxt, 'utf-8');
        // Parse to lines
        attrTxt = attrTxt.toString().replaceAll('\r', '').split('\n');
    } catch (error) {
        console.log(error);
        return;
    }
    let parsedNames = 'Current Trees:\n'
    parsedNames += attrTxt.filter((line) => {
        return line[0] && line[0] != '-' && !(line.slice(0, 4) === 'Icon');
    }).map((line) => '- ' + line).join('\n');
    return parsedNames;
}

let finishedTrees = await getFinishedTrees();

async function getToDoTrees () {
    // Get trees from TODO.md
    const pathToToDo = path.join(workingDir, '..\\..\\' , 'TODO.md');

    let toDoTxt;
    try {
        toDoTxt = await fs.promises.readFile(pathToToDo, 'utf-8');
        // Parse to lines
        toDoTxt = toDoTxt.toString().replaceAll('\r', '').split('\n');
        
        let lastHeader;

        toDoTxt = toDoTxt.filter((line) => {
            if (line[0] === '-') {
                lastHeader = line.split('- ')[1].replaceAll('  ', '');
            }
            
            if (line && lastHeader === 'Add hella trees' && !(line === '- Add hella trees  ')) {
                return true;
            }
        }).map((line) => {
            return '- ' + line.split('. ')[1] + '\n';
        });

        toDoTxt.unshift('Planned Trees:\n');
        return toDoTxt.join('');
    } catch (error) {
        console.log(error);
        return;
    }


}

let toDoTrees = await getToDoTrees();

let toBeWritten = finishedTrees + '\n\n' + toDoTrees;
console.log(toBeWritten);

async function generateTreesStatus () {
    console.log('### Generating trees-status.txt ###');
    try {
        fs.promises.writeFile(path.join(workingDir, '..\\..\\' ,'trees-status.txt'), toBeWritten);
    } catch (error){
        console.log(error);
        return;
    }
}
generateTreesStatus();
console.log('Done.');


