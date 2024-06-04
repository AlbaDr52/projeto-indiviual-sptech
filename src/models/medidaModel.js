var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
                        reacao
                        momento,
                        DATE_FORMAT(momento,'%d/%m-%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_usuario = ${idUsuario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidaPorUsuario(idUsuario) {
    
    var instrucaoSql = `SELECT * FROM medida a WHERE fk_usuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }


module.exports = {
    buscarMedidaPorUsuario,
    buscarUltimasMedidas,
}
