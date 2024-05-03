const path = require('node:path'); 
 
const filePath = '/users/joe/notes.txt'; 
 
console.log(`Directory: ${path.dirname(filePath)}`); 
console.log(`Filename: ${path.basename(filePath)}`); 
console.log(`Extension: ${path.extname(filePath)}`);