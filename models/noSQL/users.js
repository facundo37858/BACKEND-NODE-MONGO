const mongoose=require('mongoose')

const UserScheme= new mongoose.Schema(
    //estructura de los objetos
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:['user','admin'],
            default:'user'
        }

    },
    //marcas de tiempo
    {
        timestamps:true,
        versionKey:false

    }
)

module.exports=mongoose.model('users',UserScheme)//users nombre de la tabla