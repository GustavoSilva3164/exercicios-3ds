function login(usuario, senha) {
  if (!usuario || !senha) {
    return false
  }

  if (usuario === "admin" && senha === "123") {
    return true
  }

  return false
}

module.exports = login