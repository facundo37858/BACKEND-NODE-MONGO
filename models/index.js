const ENGINE_DB=process.env.ENGINE_DB
const pathModels=(ENGINE_DB === 'noSQL') ? './noSQL': './SQL'


const models={
    usersModel:require(`./${pathModels}/users`),
    trucksModel:require(`./${pathModels}/tracks`),
    storagesModel:require(`./${pathModels}/storages`)
}

module.exports=models