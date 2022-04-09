const jsonWebToken= require('jsonwebtoken')
const {JWT_SECRET}=process.env


//firmar el token generar el token
//pasar el obj del usuario
const tokenSing=async(user)=>{

    const sign= jsonWebToken.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,//expiracin
        {
            expiresIn:"2h"
        }
    )
    return sign


}

//verificar el token 
//pasar el token de secion
const verifyToken=async(tokenJwt)=>{

    try {
        return jsonWebToken.verify(tokenJwt,JWT_SECRET)
        
    } catch (error) {
        return null
        
    }

}


module.exports={
    tokenSing,
    verifyToken
}