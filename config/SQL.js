require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cursoNodejs`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


const dbConnectSQL= async()=>{
    try {
        await sequelize.sync({force:true})
        console.log('SQL_CONNEC_OK')
        
    } catch (error) {
        console.log('ERROR_SQL_CONNECT',error)
    }
}

module.exports={
    sequelize,
    dbConnectSQL
}