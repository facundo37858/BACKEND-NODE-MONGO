const express=require('express')
const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { encrypt, compare } = require('../utils/handelPassword')
const { valitadorRegistreUser, valitadorLogin } = require('../validators/auth')


const router=express.Router()

router.post('/register',valitadorRegistreUser,async(req,res)=>{
    req=matchedData(req)

    const passwordHash=await encrypt(req.password)

    const body={...req,password:passwordHash}

    const data= await usersModel.create(body)
    data.set('password',undefined,{strict:false})//con create tenemos que user esto 

    res.send({data})
})


router.post('/login',valitadorLogin,(req,res)=>{})

module.exports=router