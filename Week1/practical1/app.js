color-output.js (Practical1);

const chalk = require('chalk'); 
 
console.log(chalk.yellow('Hi there!'));

path.info.js (Practical1);

const path = require('node:path'); 
 
const filePath = '/users/joe/notes.txt'; 
 
console.log(`Directory: ${path.dirname(filePath)}`); 
console.log(`Filename: ${path.basename(filePath)}`); 
console.log(`Extension: ${path.extname(filePath)}`);

read-file.js (Practical1):

const fs = require('node:fs'); 
 
const filePath = '/Users/65883/Documents/Node/Practical1/notes.txt'; 
 
fs.readFile(filePath, 'utf8', (err, data) => { 
  if (err) { 
    console.error(err); 
    return; 
  } 
  console.log(data); 
});

write-file.js (Practical1);

const fs = require('node:fs'); 
 
const content = 'Some content!'; 
const filePath = '/Users/65883/Documents/Node/Practical1/notes.txt'; 
 
fs.writeFile(filePath, content, err => { 
  if (err) { 
    console.error(err); 
    return; 
  } 
  console.log('File written successfully'); 
});

