const express=require('express')
const { getItems,createItem,getItmById, upDateItem,deleteItemSoft, deleteItem} = require('../controllers/trucks')
const {validatorCreateItem ,validatorDetails}=require('../validators/tracks')
const { customHeader }=require('../middleware/customHeader')
const router =express.Router()



router.get('/', getItems)

//obtenrer el detalle de los trucks
router.get('/:id',validatorDetails,getItmById)


router.post('/', validatorCreateItem,createItem)

router.put('/:id',validatorDetails,validatorCreateItem,upDateItem)

router.delete('/:id',validatorDetails,deleteItem)

router.delete('/deleteSoft/:id',validatorDetails,deleteItemSoft)

module.exports=router