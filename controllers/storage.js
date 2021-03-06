const { matchedData } = require('express-validator')
const {storagesModel}=require('../models')
const { handleErrorHttp } = require('../utils/handelError')
const PUBLIC_URL=process.env.PUBLIC_URL
const MEDIA_PATH=`${__dirname}/../storage`//ruta absoluta donde se encuentra
const fs=require('fs')

const ENGINE_DB=process.env.ENGINE_DB

const getProperties = require('../utils/handlePropitiesEngine')
const propertiesKey=getProperties()


const getStorage=async(req,res)=>{
    try {

        if(ENGINE_DB==='SQL'){
            const data =await storagesModel.findAll()
            return res.send({data})
        }
        
        const data= await storagesModel.find({})

        res.send({data})

    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_GET_ITEMS_STORAGE')
    }
}

const getStorageById=async(req,res)=>{
    try {
        req=matchedData(req)
        const {id}=req

        
        const query={
            [propertiesKey.id]:id
        }
        
        const data= await storagesModel.findOne(query)

        res.send({data})

    } catch (error) {
        handleErrorHttp(res,'ERROR_GET_ITEMS_BY_ID_STORAGE')
    }
}

const createStorage=async(req,res)=>{

    try {
        const{body, file}=req
    
        const fileData={
            fileName:file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }
        const data= await storagesModel.create(fileData)
    
        res.send({data})
        
    } catch (error) {

        handleErrorHttp(res,'ERROR_CREATE_STORAGE')
        
    }
   
}

const deleteStorage=async(req,res)=>{

    try {
        const { id }=matchedData(req)
        const dataFile= await storagesModel.findById(id)
        //eliminar de la base de datos
        await storagesModel.deleteOne({_id:id})
        
        //concatenar el nombre
        const {fileName}=dataFile
        //obtengo la ruta
        const filePath=`${MEDIA_PATH}/${fileName}`
        //elimanr el registro fisico
        fs.unlinkSync(filePath)//eliminar el archivo ruta absoluta
        const data={
            filePath,
            deleted:true
        }
        res.send({data})

        
    } catch (error) {
        handleErrorHttp(res,'ERROR_DELETE_STORAGE')
        
    }

}

module.exports={getStorage,getStorageById,createStorage,upDateStorage,deleteStorage}