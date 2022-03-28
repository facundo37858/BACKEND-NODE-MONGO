const express=require('express')
const { createStorage } = require('../controllers/storage')
const router=express.Router()
const uploadMiddleware=require('../utils/handleStorage')


router.post('/',uploadMiddleware.single('myfile'),createStorage)//se gurda la imagen en la carpeta storage

module.exports=router
