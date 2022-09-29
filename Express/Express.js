/** 

1st : npm init -y
2nd : npm i express cors mongodb dotenv
3rd : index.js
===================================
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running Genius Server')
});


app.listen(port, ()=> {
    console.log('Listening to port 5000');
})

====================================
4th : package.json > scripts
 "start": "node index.js",
    "start-dev": "nodemon index.js",

======================================


*/