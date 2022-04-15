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
            type:DataTypes.INTEGER
        }
    },
    {
        timestamps:true
    }

)

//asociar modelos personalizados
Truck.belongsTo(Storage,{
    foreignKey:'mediaId'
})
Truck.findAllData= function(){
   

    return Truck.findAll({include:Storage})
    
}

Truck.findOneData= function(id){
    return Truck.findOne({where:{id}})
}
module.exports=Truck

