const {
  salvarTarefa,
  contarTarefas,
  obterTarefas
} = require('../database/tarefaDatabase')

function cadastrarTarefa(descricao) {
  if (!descricao) return false

  salvarTarefa(descricao)
  return true
}

function totalTarefas() {
  return contarTarefas()
}

function listarTarefas() {
  return obterTarefas()
}

module.exports = {
  cadastrarTarefa,
  totalTarefas,
  listarTarefas
}