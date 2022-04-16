const express = require('express');
const dotenv = require ('dotenv');
const mongoose = require('mongoose');
const {readdirSync} = require('fs');
const app = express();
require('dotenv').config();

app.use(express.json())
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
   // useFindAndModify: false,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => console.log('**DB CONNECTED**'))
  .catch((err) => console.log('DB CONNECTION ERR => ', err));

const port = process.env.PORT || 8080;
app.listen(port ,()=> console.log(`server is running on port ${port}`))