//editar encabezado 
const customHeader=(req,res,next)=>{

    try {
        const apiKey=req.headers.api_key
        if(apiKey==='leifer-01'){
            next()
        }else{
            
            res.status(403).send({error:'api key incorrecta'})
        }
        
    } catch (err) {
        res.status(403).send({error:'error header'})
    }



}

module.exports={customHeader}