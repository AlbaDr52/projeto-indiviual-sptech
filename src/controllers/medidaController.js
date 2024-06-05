var medidaModel = require("../models/medidaModel");


function buscarMedidaPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;
  
    medidaModel.buscarMedidaPorUsuario(idUsuario).then((resultado) => {
      if (resultado.length >= 0) {
        res.status(200).json(resultado);
      } 
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 30;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarMedidaPorUsuario,
    buscarUltimasMedidas,

}