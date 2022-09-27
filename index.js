import fs from 'fs';
import path from 'path';
import conversor from 'xml-js';

let arrFiles = fs.readdirSync(path.resolve("xmls"));
let timeAll = 0
arrFiles.forEach((fileName, index) => {
    let dInit = Date.now();
    let pathFile = path.resolve(process.cwd(), "xmls", fileName)
    let file = fs.readFileSync(pathFile, {flag: 'r'});
    let jsonFile = conversor.xml2json(file);
    fs.writeFileSync(path.resolve(process.cwd(), "json", fileName.replace(".xml", ".json")), jsonFile);
    let dFinal = Date.now();
    let timeDif = dFinal - dInit;
    timeAll += timeDif;
    console.log("Tempo de conversão: ", timeDif, " ms");
    if(index == arrFiles.length - 1){
        console.log("Tempo total: ", timeAll, " ms");
    }
});
