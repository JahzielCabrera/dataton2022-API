const express = require("express")
const router = express.Router()

const NetworkBoss = require("../models/NetworkBoss")
const NetworkInstitutions = require('../models/NetworkInstitutions')
const Declaracion = require("../models/Declaracion")
const NetworkBossServidor = require('../models/NetworkBossServidor')
const NetworkInstitutionServidor = require("../models/NetworkInstitutionServidor")
const Anomalia = require("../models/Anomalias")

module.exports = function() {

    router.get("/", (req, res, next) => {
        res.send("<h2>Welcome to Datómicos API v1.0 -> You can read docs <a href='/docs'>here</a></h2>")
    })

    router.get("/network_jefes", async (req, res, next) => {
        try {
            const redes = await NetworkBoss.find({})
            console.log(redes)
            res.json(redes)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/network_jefes/:id", async (req, res, next) => {
        try {
            const red = await NetworkBoss.findOne({_id: req.params.id})
            res.json(red)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/network_instituciones", async (req, res, next) => {
        try {
            const redes = await NetworkInstitutions.find({})
            res.json(redes)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/network_instituciones/:id", async (req, res, next) => {
        try {
            const red = await NetworkInstitutions.findOne({_id: req.params.id})
            res.json(red)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/declaraciones/:id", async (req, res, next) => {
        try {
            const declaracion = await Declaracion.findOne({_id: req.params.id})
            res.json(declaracion)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/network_boss_servidor/:id", async (req, res, next) => {
        try {
            const network = await NetworkBossServidor.findOne({mongo_id: req.params.id})
            res.json(network)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/network_institution/:id", async (req, res, next) => {
        try {
            const network = await NetworkInstitutionServidor.findOne({mongo_id: req.params.id})
            res.json(network)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/anomalias", async (req, res, next) => {
        try {
            const anomalias = await Anomalia.find({Bandera6:'red'})
            console.log(anomalias)
            res.json(anomalias)
        } catch (error) {
            console.log(error)
        }
    })

    router.get("/anomalias/:id", async (req, res, next) => {
        try {
            const anomalia = await Anomalia.findOne({mongo_id: req.params.id})
            console.log(anomalia)
            res.json(anomalia)
        } catch (error) {
            console.log(error)
        }
    })

    return router
}