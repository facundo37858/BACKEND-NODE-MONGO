const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { handleErrorHttp } = require('../utils/handelError')
const { encrypt, compare } = require('../utils/handelPassword')
const { tokenSing } = require('../utils/handleJwt')


const registerControl=async(req,res,next)=>{

    try {
        req=matchedData(req)

        const passwordHash=await encrypt(req.password)
    
        const body={...req,password:passwordHash}
    
        const dataUser= await usersModel.create(body)
        dataUser.set('password',undefined,{strict:false})//con create tenemos que user esto 
    
        const data={
            user:dataUser,
            token: await tokenSing(dataUser)
        }
    
        res.send({data})       
    } catch (error) {
        handleErrorHttp(res,'ERROR_EN_REGISTERCONTROL')
        
    }



}

const loginControler=async(req,res,next)=>{
    try {
        req=matchedData(req)//solo email y password
        // console.log(req)
        //buscamos el usuario
        const user =await usersModel.findOne({email:req.email})//en los modeles setemaos un select para password
        // .select('password name role email')//aplicamos un filtro en mongo
        if(!user){
            handleErrorHttp(res,'USER_NOT_EXSISTS',404)
            return
        }
        // console.log(user)
        //validamos el password
        const hashPassword= user.password
        // console.log('haspassword',hashPassword)
        const check= await compare(req.password,hashPassword)
        if(!check){
            handleErrorHttp(res,'PASSWORD_INVALID',401)
            return
        }
        //no quiero que me responda con el password
        user.set('password',undefined,{strict:false})
        const data={
            token: await tokenSing(user),
            user
        }
        res.json(data)
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_LOGINCONTROL')
        
    }
}

module.exports= {registerControl, loginControler}