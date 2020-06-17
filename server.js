// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get("/", (req, res) => {
    res.send('Teste Heroku')
});


app.post("/newagent", (req, res) => {

    const intentname = req.body.queryResult.intent.displayName;

    if (intentname == 'servicos') {
        res.json({ "fulfillmentText": "Deu certo cambada" })
    }
})
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
