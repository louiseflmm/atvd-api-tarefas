const Tarefa = require("../models/Tarefa");

let tarefas = []; // armazenamento em memória

exports.criarTarefa = (req, res) => {
  const { descricao, concluida } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "A descrição é obrigatória" });
  }

  const novaTarefa = new Tarefa(descricao, concluida);
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

exports.listarTarefas = (req, res) => {
  res.json(tarefas);
};

exports.obterTarefa = (req, res) => {
  const { objectId } = req.params;
  const tarefa = tarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  res.json(tarefa);
};

exports.atualizarTarefa = (req, res) => {
  const { objectId } = req.params;
  const { descricao, concluida } = req.body;

  const tarefa = tarefas.find(t => t.objectId === objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
};

exports.deletarTarefa = (req, res) => {
  const { objectId } = req.params;
  const index = tarefas.findIndex(t => t.objectId === objectId);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefas.splice(index, 1);
  res.status(204).send();
};
