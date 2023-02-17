const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv").config()
const cors = require("cors")
const routes = require("./routes")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(process.env.DB_URI_NEW, {
    useNewUrlParser: true
})
    .then(db => console.log("Database is connected"))
    .catch(err => console.log(err))

app.use(cors())

app.set('port', process.env.PORT || 5000);

app.use("/v1", routes())

app.listen(app.get('port'), () => {
    console.log('Sever on port:', app.get('port'))
});
