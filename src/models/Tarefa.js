const crypto = require("crypto");

class Tarefa {
  constructor(descricao, concluida = false) {
    this.objectId = crypto.randomUUID();
    this.descricao = descricao;
    this.concluida = concluida;
  }
}

module.exports = Tarefa;
