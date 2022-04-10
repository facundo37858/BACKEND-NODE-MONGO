//para cambair las poropiedaes dependiendo del engine de database

const ENGINE_DB=process.env.ENGINE_DB

//funcion dependiendo del engine cambio nombres de la propiedes

const getProperties=()=>{

    const data={
        noSQL:{
            id:'_id'
        },
        SQL:{
            id:'id'
        }
    }
    return data[ENGINE_DB]
}

module.exports=getProperties