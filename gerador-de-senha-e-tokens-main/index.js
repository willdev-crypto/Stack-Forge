//GERADOR DE SENHA
function gerarSenha(comprimento) {
    let caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvxzw0123456789!@#$%^&*?/|_()<>,.+=";
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        let randomIndex = Math.floor
            (Math.random() * caracteres.length)
            senha += caracteres[randomIndex]
    }
    return senha;
}
console.log(gerarSenha(12))