// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
const registerModel = require('./models/registerModel')


app.get("/", (req, res) => {
    res.send('Teste Heroku')
});


app.post("/newagent", (req, res) => {

    const intentname = req.body.queryResult.intent.displayName;

    if (intentname == 'servicos') {
        res.json({ "fulfillmentText": "Deu certo cambada" })
    }
    else if (intentname == 'boas-vindas') {
        res.json(
            {
                "fulfillmentMessages": [
                    {
                        "card": {
                            "buttons": [
                                {
                                    "text": "cadastrar",
                                    "button text": "quero me cadastrar !!"
                                }
                            ]
                        }
                    }
                ]
            }

        )
    }
    else if(intentname == 'cadastrar'){
       async function saveUser(){
           try{
              const newUser = await registerModel.create({
                name: user_name,
                email: user_email
            }) 
           }
            catch{
                res.json({ "fulfillmentText": "Houve um erro no seu cadastro" })
            }
        }
        saveUser()
        res.json({ "fulfillmentText": "Cadastro efetuado com sucesso !" })
    }
})
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
