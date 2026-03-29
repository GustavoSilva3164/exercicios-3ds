const { addProduct } = require("../database/database")

function cadastrarProduto(nome) {
    if (!nome) {
        return false
    }

    const newProduct = { nome }

    addProduct(newProduct)

    return true
}

module.exports = cadastrarProduto