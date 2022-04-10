const {check}=require('express-validator')
const validateResult=require('../utils/handleValidators')


const validatorId=[
    check('id').exists().notEmpty(),//.isMongoId(),para cuando estamos en mongoDb
    (req,res,next)=>{return validateResult(req,res,next)}
]

module.exports={validatorId}