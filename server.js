const express = require("express");
const express = require("express");
// const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const registerModel = require('./models/registerModel')


app.get("/", (req, res) => {
    res.send('Teste Heroku')
});


app.post("/newagent", (req, res) => {

    const intentname = req.body.queryResult.intent.displayName;

    if (intentname == 'cadastrar') {
        var userName = request.body.queryResult.parameters['user_name']
        var userEmail = request.body.queryResult.parameters['user_email']

        try {
            registerModel.create({
                name: userName,
                email: userEmail
            })
        }
        catch{
            res.json({ "fulfillmentText": "Houve um erro no seu cadastro" })
        }
    }
    saveUser()
    res.json({ "fulfillmentText": "Cadastro efetuado com sucesso !" })
})
// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
