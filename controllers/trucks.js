const { matchedData } = require('express-validator')
const {trucksModel}=require('../models')
const { handleErrorHttp } = require('../utils/handelError')


const getItems= async (req,res)=>{

    try {
        
        const data= await trucksModel.findAllData()
        const user=req.user//propiedad agragada en en middleware 
        // console.log(user)

        res.send({data, user})

    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_GET_ITEMS_TRUCKS')
    }


}
// const getItems = async (req, res) => {
//     try {
//       req = matchedData(req);
//       const id = req.id;
//       const [data] = await trucksModel.aggregate([
//         {
//           $lookup: {
//             from: "storages",
//             localField: "mediaId",
//             foreignField: "_id",
//             as: "audio",
//           },
//         },
//         { $unwind: "$audio" },
//         {
//           $match: {
//             _id: mongoose.Types.ObjectId(id),
//           },
//         },
//       ]);
  
//       res.send({ data });
//     } catch (e) {
//         handleErrorHttp(res, e);
//     }
//   };

const getItmById= async (req,res)=>{


    try {
        req=matchedData(req)
        const {id}=req
        
        let data= await trucksModel.findOneData(id)
        

        res.send({data})

    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_GET_ITEMS_BY_ID_TRUCKS')
    }


}


const createItem=async(req,res)=>{
    //body limpios evitar enviar datos no necesarios utilizo la funcion 'matchedData' de express validators
    try {
        const body = matchedData(req)//limpio body solo deja los objetos de la data que cumple la validadciones que predeterminaste
        // console.log(body)
        const data = await trucksModel.create(body)
        res.send({data})        
    } catch (error) {
        handleErrorHttp(res,'ERROR_CREATE_ITEM_TRUCKS')
        
    }


}

const upDateItem=async(req,res)=>{
    try{
        const {id, ...body}= matchedData(req)// sacar el id, un obj con el id, obj con el resto de la info
        
        const data= await trucksModel.findOneAndUpdate(id,body)
        res.send({data})

    }catch(e){
        handleErrorHttp(res,'ERROR_UPDATA_TRUCK')

    }

}

const deleteItem=async(req,res)=>{
    try {

        req=matchedData(req)
        const {id}=req
        
        const data= await trucksModel.deleteOne({_id:id})

        res.send({data})

    } catch (error) {
        handleErrorHttp(res,'ERROR_DELETE_ITEM')
    }

}

const deleteItemSoft=async(req,res)=>{
    try {

        req=matchedData(req)
        const {id}=req
        
        const data= await trucksModel.delete({_id:id})

        res.send({data})

    } catch (error) {
        handleErrorHttp(res,'ERROR_DELETE_SOFT_ITEM')
    }

}

module.exports={getItems,getItmById, createItem, upDateItem, deleteItem, deleteItemSoft}