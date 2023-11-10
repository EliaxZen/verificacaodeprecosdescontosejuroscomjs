/*
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro o PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal do produto sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
//Dados
let precoProduto = 100;
let formaDePagamento = 4

//Verificação
if(formaDePagamento === 1) {
  console.log("Valor total: R$" + (precoProduto - (precoProduto * 0.10)))
} else if(formaDePagamento === 2) {
  console.log("Valor total: R$" + (precoProduto - (precoProduto * 0.15)))
} else if(formaDePagamento === 3) {
  console.log("Valor total: R$" + precoProduto)
} else {
  console.log("Valor total: R$" + (precoProduto + (precoProduto * 0.10)))
}

