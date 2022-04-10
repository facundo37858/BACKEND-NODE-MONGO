const {DataTypes} = require('sequelize'); 
const { sequelize } = require('../../config/SQL');

const User= sequelize.define(
    'users',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        age:{
            type: DataTypes.INTEGER
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        role:{
            type:DataTypes.ENUM(['user','admin']),
            defaultValue:'user'
        }
    },
    {
        timestamps:true
    }

)
module.exports=User

