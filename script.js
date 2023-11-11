/*
  1- À vista Débito, recebe 10% de desconto;
  2- À vista no Dinheiro o PIX, recebe 15% de desconto;
  3- Em duas vezes, preço normal do produto sem juros;
  4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(precoProduto, desconto) {
  return precoProduto - (precoProduto * (desconto / 100))
}

function aplicarJuros(precoProduto, juros) {
  return precoProduto + (precoProduto * (juros / 100))
}

function verificacaoPagamento(precoProduto, formaDePagamento) {
  if (formaDePagamento === 1) {
    return "Valor total: R$" + aplicarDesconto(precoProduto, 10);
  } else if (formaDePagamento === 2) {
    return "Valor total: R$" + aplicarDesconto(precoProduto, 30);
  } else if (formaDePagamento === 3) {
    return "Valor total: R$" + precoProduto;
  } else {
    return "Valor total: R$" + aplicarJuros(precoProduto, 10);
  }
}

console.log(verificacaoPagamento(100, 4))

