const {
  salvarTarefa,
  contarTarefas
} = require('../database/tarefaDatabase')

function cadastrarTarefa(descricao) {
  if (!descricao) return false

  salvarTarefa(descricao)
  return true
}

function totalTarefas() {
  return contarTarefas()
}

module.exports = {
  cadastrarTarefa,
  totalTarefas
}