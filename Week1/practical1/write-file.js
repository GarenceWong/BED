const fs = require('node:fs'); 
 
const content = 'Some content!'; 
const filePath = 'C:\Users\garen\OneDrive\Desktop\School\Y2S1 Module\BED\BED2024Apr_P_P01_S10262458\Week1\Practical1\notes.txt'; 
 
fs.writeFile(filePath, content, err => { 
  if (err) { 
    console.error(err); 
    return; 
  } 
  console.log('File written successfully'); 
});