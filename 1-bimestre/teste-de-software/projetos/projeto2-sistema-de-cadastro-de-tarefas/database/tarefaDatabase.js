let tarefas = []

function salvarTarefa(descricao) {
  tarefas.push(descricao)
}

function contarTarefas() {
  return tarefas.length
}

function resetarBanco() {
  tarefas = []
}

module.exports = {
  salvarTarefa,
  contarTarefas,
  resetarBanco
}