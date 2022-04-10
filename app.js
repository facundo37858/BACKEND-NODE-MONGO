require('dotenv').config()

const express=require('express')

const cors=require('cors')

const morganbody=require('morgan-body')// envia el body de las peticiones
const loggerStream =require('./utils/handleLogers')

const dbConnect=require('./config/mongo')
const {dbConnectSQL , sequelize}=require('./config/SQL')

const {ENGINE_DB}=process.env//pude ser SQL o noSQL

const app= express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))




morganbody(app,{//para utilizar morgan-body
    noColors:true,//docu de morgan-body
    stream: loggerStream,
    skip: function(req,res){//para enviar solomaente errores
        return res.statusCode < 400 
    }
})

app.use('/api',require('./routes'))

const port= process.env.PORT || 3001

app.listen(port,()=>{
    (ENGINE_DB === 'noSQL')? dbConnect(): dbConnectSQL()
    console.log(`htpp://localhost:${port}`)
    
})








// (ENGINE_DB === 'noSQL') ? dbConnect(): dbConnectSQL()