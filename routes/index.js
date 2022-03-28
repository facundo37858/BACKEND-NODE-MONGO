const express =require('express')
const fs=require('fs')
const router=express.Router()

const PATH_ROUTES=__dirname

//funcion para consegir el nombre del archivo sin la extencion

const removeExtension=(fileName)=>{
    return fileName.split('.').shift()
}

//devuelve un array con los nombres de los archivos de las rutas
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name= removeExtension(file)//todo users,trucks,storages

    if(name !=='index'){//omitir el archivo index
        // console.log(name,file)
        router.use(`/${name}`,require(`./${file}`))
    }
})



module.exports=router