const {
  cadastrarTarefa,
  totalTarefas,
  listarTarefas
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

function listar() {
  return { tarefas: listarTarefas() }
}

module.exports = {
  criar,
  total,
  listar
}