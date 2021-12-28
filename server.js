const express = require('express'); 
const db = require("./db.js")
const app = express(); 
const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 

//app.get('./client/index', (req, res) => { 
  //res.send({ express: 'React connected to express' }); 
//}); 


