const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NetworkInstitutionSchema = new Schema({
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
    Sancionados: Number,
    No_Sancionados: Number
})

module.exports = mongoose.model("graphs_institutions", NetworkInstitutionSchema)


