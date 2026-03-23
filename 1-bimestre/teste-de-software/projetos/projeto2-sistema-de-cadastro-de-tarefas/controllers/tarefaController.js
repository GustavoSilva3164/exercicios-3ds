const {
  cadastrarTarefa,
  totalTarefas
} = require('../services/tarefaService')

function criar(descricao) {
  const sucesso = cadastrarTarefa(descricao)

  if (!sucesso) {
    return { erro: 'Descrição obrigatória' }
  }

  return { mensagem: 'Tarefa cadastrada' }
}

function total() {
  return { total: totalTarefas() }
}

module.exports = {
  criar,
  total
}