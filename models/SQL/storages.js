const {DataTypes} = require('sequelize'); 
const { sequelize } = require('../../config/SQL');

const Storage= sequelize.define(
    'storage',
    {
        url:{
            type:DataTypes.STRING,
            allowNull:false
        },
        fileName:{
            type: DataTypes.STRING
        }
          
    },
    {
        timestamps:true
    }

)
module.exports=Storage

