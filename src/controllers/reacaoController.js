var reacaoModel = require("../models/reacaoModel");
function cadastrar(req, res) {
    var reacao = req.body.reacao;
    let id = req.params.idUsuario;
    if (reacao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }


    reacaoModel.cadastrar(reacao, id).then(function(resposta){
        res.status(200).send("FOIII");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}