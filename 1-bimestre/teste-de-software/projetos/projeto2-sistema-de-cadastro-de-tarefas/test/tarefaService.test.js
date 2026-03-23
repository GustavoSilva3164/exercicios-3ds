const {
  cadastrarTarefa,
  totalTarefas
} = require('../services/tarefaService')

const { resetarBanco } = require('../database/tarefaDatabase')

describe('Sistema de Tarefas', () => {

  beforeEach(() => {
    resetarBanco()
  })

  test('Deve cadastrar uma tarefa com sucesso', () => {
    const resultado = cadastrarTarefa('Estudar Jest')
    expect(resultado).toBeTruthy()
  })

  test('Não deve cadastrar tarefa sem descrição', () => {
    const resultado = cadastrarTarefa('')
    expect(resultado).toBeFalsy()
  })

  test('Deve retornar o total correto de tarefas', () => {
    cadastrarTarefa('Tarefa 1')
    cadastrarTarefa('Tarefa 2')

    expect(totalTarefas()).toBe(2)
  })

  test('Banco deve iniciar vazio', () => {
    expect(totalTarefas()).toBe(0)
  })

})