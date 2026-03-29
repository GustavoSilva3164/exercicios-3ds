let products = []

function addProduct(product) {
    products.push(product)
}

function listProducts() {
    return products
}

function refreshList() {
    products = []
}

module.exports = {
    addProduct,
    listProducts,
    refreshList
}