//validadores para la rutas de track usasando express-validator
const {check}=require ('express-validator')
const validateResult=require('../utils/handleValidators')

//creamos un obj por cada meddlewear 

const validatorCreateItem=[
    check('name').exists().notEmpty().isLength({min:5,max:90}),//que excisita una propiead name, no sea vacia y q tenga una determina longitud
    check('album').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickName').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    check('mediaId').exists().notEmpty().isMongoId(),
    (req,res,next)=>{return validateResult(req,res,next)}
]  
const validatorDetails=[
    check('id').exists().notEmpty().isMongoId(),
    (req,res,next)=>{return validateResult(req,res,next)}

] 
// tiene que devolver una respuesta

module.exports={validatorCreateItem, validatorDetails}