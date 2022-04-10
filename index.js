const express = require('express');
const dotenv = require ('dotenv');

const {readdirSync} = require('fs');
const app = express();
require('dotenv').config();

app.use(express.json())
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

//db connection

const port = process.env.PORT || 8080;
app.listen(port ,()=> console.log(`server is running on port ${port}`))