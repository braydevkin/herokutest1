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

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
const registerModel = require('./models/registerModel')


app.get("/", (req, res) => {
    res.send('Teste Heroku')
});

app.post("/newagent", (req, res) => {

    const intentname = req.body.queryResult.intent.displayName;

    if (intentname == 'cadastrar') {
        var userName = req.body.queryResult.parameters['user_name']
        var userEmail = req.body.queryResult.parameters['user_email']

        registerModel.create({
            name: userName,
            email: userEmail
        })
        res.json({ "fulfillmentText": "Cadastro efetuado com sucesso 100%!" })
        
        // listen for requests :)
        const listener = app.listen(process.env.PORT || 3000, () => {
            console.log("Your app is listening on port " + listener.address().port);
        });
    }
})