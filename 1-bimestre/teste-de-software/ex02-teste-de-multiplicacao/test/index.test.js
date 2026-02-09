const multiplicar = require("../index.js")

test("A multiplicação de 2 x 3 deve ser 6", () => {
    expect(multiplicar(2, 3)).toBe(6)
})
