const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const User = sequelize.define("user",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Username:{
        type:Sequelize.STRING,
       allowNull:false

    },
    email:{
        type:Sequelize.STRING,
       allowNull:false

    },
    password:{
        type:Sequelize.STRING,
        allowNull:false

    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        default:false
    }
    
    
});

module.exports =User;
        