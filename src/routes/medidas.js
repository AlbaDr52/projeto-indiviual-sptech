var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.get("/:idUsuario", function (req, res) {
    medidaController.buscarMedidaPorUsuario(req, res);
  });



module.exports = router;