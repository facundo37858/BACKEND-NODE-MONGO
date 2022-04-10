const {DataTypes} = require('sequelize'); 
const { sequelize } = require('../../config/SQL');
const Storage=require('./storages')

const Truck= sequelize.define(
    'trucks',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        album:{
            type: DataTypes.STRING
        },
        cover:{
            type:DataTypes.STRING
        },
        artist_name:{
            type:DataTypes.STRING
        },
        artist_nickName:{
            type:DataTypes.STRING
        },
        artist_nationality:{
            type:DataTypes.STRING
        },
        duration_start:{
            type:DataTypes.INTEGER
        },
        duration_end:{
            type:DataTypes.INTEGER
        },
        mediaId:{
            type:DataTypes.STRING
        }
    },
    {
        timestamps:true
    }

)

//asociar modelos personalizados

Truck.findAllData= function(){
    Truck.belongsTo(Storage,{
        foreignKey:'mediaId'
    })

    return Truck.findAll({include:Storage})
}

Truck.findOneData= function(id){
    Truck.belongsTo(Storage,{
        foreignKey:'mediaId'
    })

    return Truck.findOne({where:{id}},{include:Storage})
}
module.exports=Truck

