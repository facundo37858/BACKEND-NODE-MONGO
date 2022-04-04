const {check}=require('express-validator')
const validateResult=require('../utils/handleValidators')


const validatorId=[
    check('id').exists().notEmpty().isMongoId(),
    (req,res,next)=>{return validateResult(req,res,next)}
]

module.exports={validatorId}