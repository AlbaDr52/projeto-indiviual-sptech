var express = require("express");
var router = express.Router();

var reacaoController = require("../controllers/reacaoController");

router.post("/cadastrar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /reacao/cadastrar
    reacaoController.cadastrar(req, res);
});

module.exports = router;