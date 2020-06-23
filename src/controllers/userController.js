const registerModel = require('../models/registerModel')

module.exports = {
    Start(req, res) {
        res.send('Olá ChatBot')
    },
    async Store(req, res) {
        const userSay = req.body.queryResult.queryText;
        const intentname = req.body.queryResult.intent.displayName;

        if (userSay == intentname) {
            if (intentname == 'cadastrar') {
                const userName = await req.body.queryResult.parameters['user_name']
                const userEmail = await req.body.queryResult.parameters['user_email']

                try {
                    await registerModel.create({
                        name: userName,
                        email: userEmail
                    })
                    res.json({ "fulfillmentText": "Obrigado por se registrar" })
                }
                catch{
                    res.json({ "fulfillmentText": "Não foi possível efetuar seu cadastro, tente novamente" })
                }
            }
        }
        else if (intentname == 'boas-vindas') {
            res.send('Olá sou seu  agente virtual como posso te ajudar ?')
        }
    },
    async Show(req, res) {
        try {
            const users = await registerModel.find(req.body)
            return res.send(users)
        }
        catch{
            res.send('Não foi possível encontrar os usuários, tente novamente')
        }
    },
    async sendMessage(req, res){
        await req.body.queryResult.queryText;
    },
    async  receiveMessage(req,res){
        await req.body.queryResult.fulfillmentText
    }
}