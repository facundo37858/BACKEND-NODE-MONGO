const express=require('express')
const { getItems,createItem,getItmById, upDateItem,deleteItemSoft, deleteItem} = require('../controllers/trucks')
const {validatorCreateItem ,validatorDetails}=require('../validators/tracks')
const { customHeader }=require('../middleware/customHeader')
const { protectorRoutes } = require('../middleware/session')
const checkRole = require('../middleware/role')
const router =express.Router()



router.get('/', protectorRoutes,getItems)

//obtenrer el detalle de los trucks
router.get('/:id',protectorRoutes, validatorDetails,getItmById)


router.post('/',protectorRoutes,checkRole(['admin']), validatorCreateItem,createItem)

router.put('/:id',protectorRoutes, validatorDetails,validatorCreateItem,upDateItem)

router.delete('/:id',protectorRoutes, validatorDetails,deleteItem)

router.delete('/deleteSoft/:id', protectorRoutes,validatorDetails,deleteItemSoft)

module.exports=router