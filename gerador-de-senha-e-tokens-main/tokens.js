//GERADOR DE TOKENS
function gerarTokens(comprimento) {
    let caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvxzw0123456789";
    let tokens = '';
    for (let i = 0; i < comprimento; i++) {
        let randomIndex = Math.floor
            (Math.random() * caracteres.length)
            tokens += caracteres[randomIndex]
    }
    return tokens;
}
console.log(gerarTokens(64))