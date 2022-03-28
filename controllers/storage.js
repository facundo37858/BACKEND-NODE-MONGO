const {storagesModel}=require('../models')
const PUBLIC_URL=process.env.PUBLIC_URL




const createStorage=async(req,res)=>{
    const{body, file}=req
    
    const fileData={
        fileName:file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data= await storagesModel.create(fileData)

    res.send({data})

}

const upDateStorage=(req,res)=>{

}

const deleteStorage=(req,res)=>{

}

module.exports={createStorage,upDateStorage,deleteStorage}