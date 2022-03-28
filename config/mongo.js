const mongosee =require('mongoose')
require('dotenv').config()

const dbConnect=()=>{

    const DB_URI=process.env.DB_URI
    //configuracion de mongosee
    mongosee.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err,res)=>{
        if(!err){
            console.log(`### CONEXION CORRECTA MONGO`)
        }else{
            console.log(`### ERROR EN LA CONEXION MONGO`)
        }
       
    })

}

module.exports=dbConnect