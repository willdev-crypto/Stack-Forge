let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};


valorSubtotal.innerText = subtotalInfo.valor;

// ------ VARIAVEIS------------ //

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01")
let btnSubtrair = document.querySelector("#btn-subtrair-produto-01")
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01")


// ------ FUNÇÕES -------------- //

function atualizaSubtotal(){

}


function adicionarUm() {
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

  subtotalInfo.quantidade = subtotalInfo.quantidade + 1

  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
}

function removeUm() {
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1
  }
}
// -------EVENTO --------------//


btnAddProduto01.addEventListener("click", adicionarUm)
btnSubtrairProduto01.addEventListener("click", removeUm)

// Selecione o botão "Subtrair" (sem declarar novamente a variável quantidadeProduto01)
let btnSubtrairProduto01 = document.querySelector("#btn-subtrair-produto-01");

// Função para subtrair um item
function subtrairUm() {
  let quantidade = Number(quantidadeProduto01.value);

  // Certifique-se de que a quantidade não seja menor que zero
  if (quantidade > 0) {
    quantidadeProduto01.value = quantidade - 1;
  }
}

// Adicione um ouvinte de evento de clique ao botão "Subtrair"
btnSubtrairProduto01.addEventListener("click", subtrairUm);





