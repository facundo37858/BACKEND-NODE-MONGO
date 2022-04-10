//queremos proteger las rutas para que solo allgunos pudan acceder

const { usersModel } = require('../models')
const { handleErrorHttp}=require('../utils/handelError')
const { verifyToken } = require('../utils/handleJwt')
const getProperties = require('../utils/handlePropitiesEngine')
const propertiesKey=getProperties()



const protectorRoutes=async(req,res,next)=>{
    try {
        //tenemos que capturar el token que esta en el header

        if(!req.headers.authorization){
            handleErrorHttp(res,'NOT_TOKEN_SESSION',401)
            return
        }
        const token=req.headers.authorization.split(' ').pop()//sacamos el Bearer

        const dataToken= await verifyToken(token)

        if(!dataToken){
            handleErrorHttp(res,'ERROR_NOT_PAYLOAD_DATA',401)
            return

        }

        // if(!dataToken._id){
        //     handleErrorHttp(res, 'ERROR_ID_TOKEN',401)
        // }

        const query={
            [propertiesKey.id]:dataToken[propertiesKey.id]
        }

        //quiero saber que user esta accediendo
        const user=await usersModel.findOne(query)
        //agrego una propiedad user a req
        //puedo saber el user que esta haciendo la peticion
        req.user=user
        next()

        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_SESSION',401)
    }
}

module.exports={protectorRoutes}