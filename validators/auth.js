const { check }=require('express-validator')
const validateResult=require('../utils/handleValidators')

const valitadorRegistreUser=[
    check('name').exists().notEmpty().isLength({min:3,max:99}),
    check('age').exists().notEmpty().isNumeric(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:5,max:8}),
    (res,req,next)=>{return validateResult( res,req,next)}

]

const valitadorLogin=[
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:5,max:8}),
    (res,req,next)=>{return validateResult( res,req,next)}

]

module.exports={
    valitadorRegistreUser,
    valitadorLogin
}