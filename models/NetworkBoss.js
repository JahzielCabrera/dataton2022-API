const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NetworkBossSchema = new Schema({
    directed: Boolean,
    multigraph: Boolean,
    graph: Object,
    nodes: [
      {
        color: String,
        id: String
      }
    ],
    links: [
      {
        source: String,
        target: String
      }
    ],
    Institucion: String,
    Sancionados: Number,
    No_Sancionados: Number
})

module.exports = mongoose.model("graphs_bosses", NetworkBossSchema)


