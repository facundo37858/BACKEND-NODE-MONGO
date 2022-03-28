const {trucksModel}=require('../models')


const getItems= async (req,res)=>{

    const data= await trucksModel.find({})

    res.send({data})

}

const createItem=async(req,res)=>{
    const{ body}=req
    // console.log(body)
    const data = await trucksModel.create(body)
    res.send(data)

}

const upDateItem=(req,res)=>{

}

const deleteItem=(req,res)=>{

}

module.exports={getItems, createItem, upDateItem, deleteItem}