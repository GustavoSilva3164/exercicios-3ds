const { numeroMaior, texto, resultado } = require('../index')

test('5 é maior que 3', () => {
  expect(numeroMaior()).toBeGreaterThan(3)
})

test('Texto contém a palavra "Software"', () => {
  expect(texto()).toContain('Software')
})

test('Objeto é igual ao esperado', () => {
  expect(resultado()).toEqual({ aprovado: true })
})