//----------------------------------------------------------- IMPORTS
const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors')
const routes = require('./routes')
//----------------------------------------------------------- CALL
const app = express();
app.use(cors())
//----------------------------------------------------------- CONFIG BODY-PARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//----------------------------------------------------------- DATABASE (MONGO)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
//----------------------------------------------------------- ROUTES
app.use(routes)
//----------------------------------------------------------- CONEXÃO COM A PORTA
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});