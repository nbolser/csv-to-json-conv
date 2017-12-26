const fs = require('fs'),
  csv = require('csvtojson'),
  path = require('path');

const outputFile = 'customer-data.json'
const outputFilePath = path.join(__dirname, outputFile)

const convertCsv = (pathToCsv = '') => {
  console.log('Coverting...');
  let data = [];

  csv()
    .fromFile(pathToCsv)
    .on('json', (jsonObj) => {
      data.push(jsonObj);
    })
    .on('done', (error) => {
      fs.writeFileSync(outputFilePath, toStringify(data));
      console.log('Coversion complete');
    });

    const toStringify = (data) => {
      return JSON.stringify(data, null, '\t');
    }
};

convertCsv(process.argv[2]);
