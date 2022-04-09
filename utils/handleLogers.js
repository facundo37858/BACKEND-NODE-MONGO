
const {IncomingWebhook}=require('@slack/webhook')//para enviar mensajes a slakc


const webHook=new IncomingWebhook(process.env.SLACK_WEBHOOK)

const loggerStream = {//funcion de morgan-body
    write: message => {
        webHook.send({
            text:message
        })
        // console.log('capturando el errro',message)
      // do anything - emit to websocket? send message somewhere? log to cloud?
    },
};

module.exports=loggerStream