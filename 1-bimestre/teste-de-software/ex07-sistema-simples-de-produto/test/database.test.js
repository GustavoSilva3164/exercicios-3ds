const { listProducts, addProduct, refreshProducts } = require('../database/database')

beforeEach(() => {
    refreshProducts()
})

test("Deve validar se um produto foi adicionado ao banco", () => {
    addProduct({ nome: "Almofada" })

    expect(listProducts().length).toBe(1)
})

test("Deve validar caso o banco tenha sido esvaziado", () => {
    expect(listProducts().length).toBe(0)
})