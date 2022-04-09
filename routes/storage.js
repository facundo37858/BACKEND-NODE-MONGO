const express=require('express')
const { createStorage,getStorageById,getStorage,deleteStorage,upDateStorage } = require('../controllers/storage')
const router=express.Router()
const uploadMiddleware=require('../utils/handleStorage')
const { validatorId } = require('../validators/storage')

const { protectorRoutes } = require('../middleware/session')


router.get('/',protectorRoutes,getStorage)

router.get('/:id',protectorRoutes,validatorId,getStorageById)

router.post('/',protectorRoutes,uploadMiddleware.single('myfile'),createStorage)//se gurda la imagen en la carpeta storage

router.put('/:id',protectorRoutes,validatorId,upDateStorage)

router.delete('/:id',protectorRoutes,validatorId,deleteStorage)

module.exports=router
