const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function readFile() {
    return new Promise((resolve, reject) => {
        const dataFromFile = [];
        const fileStream = fs.createReadStream(`./archive/blcokList.csv`);

        fileStream.on('error', error => reject(error));

        fileStream
            .pipe(csv(['prev_hash', 'message', 'nonce']))
            .on('data', data => dataFromFile.push(data))
            .on('end', () => {
                resolve(dataFromFile[dataFromFile.length - 1]);
            });
    });
}

function writeFile(newRow) {
    return new Promise(async (resolve, reject) => {
        try {
            const csvWriter = createCsvWriter({
                path: `./archive/blcokList.csv`,
                append: true,
                header: ['prev_hash', 'message', 'nonce']
            });
            await csvWriter.writeRecords(newRow);
            console.log('The CSV file was written succefully');
            resolve('Row inserted');

        } catch (error) {
            reject(error)
        }
    });
}

function getRows(){
    return new Promise(async (resolve, reject) => {
        try{
            const dataFromFile = [];
        const fileStream = fs.createReadStream(`./archive/blcokList.csv`);

        fileStream.on('error', error => reject(error));

        fileStream
            .pipe(csv(['prev_hash', 'message', 'nonce']))
            .on('data', data => dataFromFile.push(data))
            .on('end', () => {
                resolve(dataFromFile);
            });
        }catch(error){
            reject(error);
        }
    });
}

module.exports = {
    readFile,
    writeFile,
    getRows
}