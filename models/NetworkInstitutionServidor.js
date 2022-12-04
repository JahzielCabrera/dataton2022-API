const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NetworkInstitutionsServidorSchema = new Schema({
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
    mongo_id: String
})

module.exports = mongoose.model("subgraphs_institutiones", NetworkInstitutionsServidorSchema)


