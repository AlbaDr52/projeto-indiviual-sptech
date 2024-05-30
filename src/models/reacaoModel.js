var database = require("../database/config")

function cadastrar(reacao, id) {
    
    var instrucao = `
    insert into medida (reacao, momento, fk_usuario) values
    (${reacao},now(),${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    cadastrar
};