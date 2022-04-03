const Sequelize = require('sequelize');
const sequelize = require ('../config/db.config');

const Product = sequelize.define("product",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
       allowNull:false

    },
    desc:{
        type:Sequelize.STRING,
       allowNull:false

    },
    img:{
        type:Sequelize.STRING,
        allowNull:false

    },
    categories:{
        type:Sequelize.JSON,
        default:false
    },
    size:{
        type:Sequelize.STRING,
        default:false
    },
    color:{
        type:Sequelize.STRING,
        default:false
    },
    price:{
        type:Sequelize.NUMBER,
        default:false
    }
    
    
    
});

module.exports =Product;
        