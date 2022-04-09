//para proteger las rutas el rol de user
// depeder de proteccion de rutas
//rol: array con los roles permitidos

const { handleErrorHttp } = require("../utils/handelError")

const checkRole=(roles)=>async(req,res,next)=>{

    try {
        const { user }=req
        // console.log(user)

        const roleUser=user.role
        const checkValueRol= roles.some((rolsingle)=>roleUser.includes(rolsingle))//nos devulve un true o false, permite seguir si alguno de los reloes exciste
        if(!checkValueRol){
            handleErrorHttp(res,'ERROR_PERMISION_ROLE_USER',403)
            return
        }
        
        next()

        
    } catch (error) {
        // console.log(error)
        handleErrorHttp(res,'ERROR_ROLE',403)
    }


}

module.exports=checkRole