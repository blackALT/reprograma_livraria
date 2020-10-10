const express = require("express");
const router = express.Router()

router.get("/", function (req, res){
    res.status(200).send({
        title: "Reprograma - Livraria - Semana 9",
        version: "1.0.0",
        developer: "blackALT"
    })
})

module.exports = router