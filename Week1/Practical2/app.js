const express = require('express'); 
const app = express(); 
const port = 3000; 
 
// Respond with 'Hello World!' on the homepage 
app.get('/', (req, res) => { 
  res.send('Hello World!'); 
}); 
 
// Respond to POST request on the root route 
app.post('/', (req, res) => { 
  res.send('Got a POST request'); 
}); 
 
// Respond to a PUT request to the /user route 
app.put('/user', (req, res) => { 
  res.send('Got a PUT request at /user'); 
}); 
 
// Respond to a DELETE request to the /user route 
app.delete('/user', (req, res) => { 
  res.send('Got a DELETE request at /user'); 
}); 
 
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}); 
 
app.use(express.static('public'));