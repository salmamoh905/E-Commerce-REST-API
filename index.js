const express = require('express');
const dotenv = require ('dotenv');
const sequelize =require('sequelize')

const app = express();
dotenv.config()

app.use(express.json())

const port = process.env.PORT || 8080;
app.listen(port ,()=> console.log(`server is running on port ${port}`))