const mongoose=require('mongoose')
const mongooseDelete=require('mongoose-delete')

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
            type:String,
            select:false//para que no me devuelva el dato
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
UserScheme.plugin(mongooseDelete,{overrideMethods:'all'})
module.exports=mongoose.model('users',UserScheme)//users nombre de la tabla