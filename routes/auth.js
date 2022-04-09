const express=require('express')
const { valitadorRegistreUser, valitadorLogin } = require('../validators/auth')
const {registerControl, loginControler} =require('../controllers/auth')

const router=express.Router()

router.post('/register',valitadorRegistreUser,registerControl)

router.post('/login',valitadorLogin,loginControler)

module.exports=router