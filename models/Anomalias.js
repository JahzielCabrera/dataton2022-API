const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AnomaliaSchema = new Schema({
    mongo_id: String,
    Bandera1: String,
    Bandera2: String,
    Bandera3: String,
    Bandera4: String,
    Bandera5: String,
    Bandera6: String,
    id_servidor: String 
})

module.exports = mongoose.model("anomaliases", AnomaliaSchema)


