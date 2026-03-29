let products = []

function listProducts() {
    return products
}

function addProduct(product) {
    products.push(product)
}

function refreshProducts() {
    products = []
}

module.exports = {
    listProducts,
    addProduct,
    refreshProducts
}