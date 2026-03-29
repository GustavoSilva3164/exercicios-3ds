const { refreshList } = require('../database/database')
const cadastrarProduto = require('../services/cadastrarProduto')

beforeEach(() => {
    refreshList()
})

describe("Testes para verificar o cadastro de produtos", () => {

    test("Deve retornar verdadeiro para produto válido", () => {
        expect(cadastrarProduto("Mortal Kombat III")).toBeTruthy()
    })

    test("Deve retornar falso para produto inválido", () => {
        expect(cadastrarProduto()).toBeFalsy()
    })
    
})