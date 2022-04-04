const bcryptjs=require('bcryptjs')

//encriptar

const encrypt=async(passPlain)=>{
    const hash= await bcryptjs.hash(passPlain,8)

    return hash

}

//comparar el password con el hash guardado

const compare=async(passPlain,hashPass)=>{
    return await bcryptjs.compare(passPlain,hashPass)

}

module.exports={
    encrypt,
    compare
}