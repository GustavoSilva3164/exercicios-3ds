let tarefas = []

function salvarTarefa(descricao) {
  tarefas.push(descricao)
}

function contarTarefas() {
  return tarefas.length
}

function obterTarefas() {
  return tarefas
}

function resetarBanco() {
  tarefas = []
}

module.exports = {
  salvarTarefa,
  contarTarefas,
  obterTarefas,
  resetarBanco
}