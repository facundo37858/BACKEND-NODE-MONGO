const express=require('express')
const { createStorage,getStorageById,getStorage,deleteStorage,upDateStorage } = require('../controllers/storage')
const router=express.Router()
const uploadMiddleware=require('../utils/handleStorage')
const { validatorId } = require('../validators/storage')



router.get('/',getStorage)

router.get('/:id',validatorId,getStorageById)

router.post('/',uploadMiddleware.single('myfile'),createStorage)//se gurda la imagen en la carpeta storage

router.put('/:id',validatorId,upDateStorage)

router.delete('/:id',validatorId,deleteStorage)

module.exports=router
