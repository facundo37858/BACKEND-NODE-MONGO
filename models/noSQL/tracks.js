const mongoose=require('mongoose')
const mongooseDelete = require('mongoose-delete')


const TracksScheme= new mongoose.Schema({

    name:{
        type:String
    },
    album:{
        type:String
    },
    cover:{
        type:String,
        validate:{
            validator:(req)=>{
                return true
            }
        },
        message:'error_url'
    },
    artist:{
        name:{
            type:String
        },
        nickName:{
            type:String
        },
        nationality:{
            type:String
        }

    },
    duration:{
        start:{
            type:Number
        },
        end:{
            type:Number
        }
    },
    mediaId:{
        type: mongoose.Types.ObjectId
    }

},
{
    timestamps:true,
    versionKey:false
})

//relaciones con storage con mongoose
//creamos un metedo para la relaciones
//ducumentacion Statics https://mongoosejs.com/docs/guide.html#statics
//metodo perzonalizado para hacer una relacion 
//relacion en mongo usamos mongo lookup https://www.mongodb.com/docs/manual/reference/operator/aggregation/lo
TracksScheme.statics.findAllData= function() {
    const joinData=this.aggregate( [
        {
          $lookup:
            {
              from: "storages",//Tracks--->storages
              localField: "mediaId",//campo mediaId de tracks
              foreignField: "_id",//realacione con el _id de storage
              as: "audio"//resultado en un alias
            }
       },
    //    {
    //        $unwind:'$audio'
    //    }
     ] )
    return joinData
};


TracksScheme.statics.findOneData= function(id) {
    const data=this.aggregate([
        {
          $lookup: {
            from: "storages",
            localField: "mediaId",
            foreignField: "_id",
            as: "audio",
          },
        },
         { $unwind: "$audio" },
        {
          $match: {
            _id: mongoose.Types.ObjectId(id),
          },
        },
      ]);
    return data
};




TracksScheme.plugin(mongooseDelete, {overrideMethods:'all'})//para hacer softdelete
module.exports=mongoose.model('trucks',TracksScheme)