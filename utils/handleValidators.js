const { validationResult }=require('express-validator')

//validadlor del resultado
const validateResult=(req,res,next)=>{
    try {
        
        validationResult(req).throw()
        return next()

    } catch (err) {
        res.status(403).send({errors: err.array()})
        
    }
}

module.exports= validateResult