//config multer

const multer=require('multer')

const storage= multer.diskStorage({
    destination:function(req,file,cb){//donde vamos a gurdar el archivo

        const pathStorage=`${__dirname}/../storage`//donde se gurdan los archivos

        cb(null,pathStorage)


    },
    filename:function(req,file,cb){//como se guarda el archivo con q nombre
        //obtener la extencion
        const ext=file.originalname.split('.').pop()//['naem','png']

        const fileName=`file-${Date.now()}.${ext}`// file-nombredelarchivo.png

        cb(null,fileName)

    }
})

//midelWear
const uploadMiddleware=multer({storage})

module.exports=uploadMiddleware