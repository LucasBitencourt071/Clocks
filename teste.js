let count = 0;
let count2 = 0;
let carrinho = 0;
let carrinho2 = 0;
let total = carrinho + carrinho2;
let precoTotal = parseInt(document.getElementById("precoTotal").value);
// let precoTotal2 = document.getElementById("precoTotal").value;
function btMais() {
  count++;
  let total = carrinho + carrinho2;
  document.getElementById("carrinhoItem").innerHTML = count;
  if (count <= 0) {
    document.getElementById("carrinhoItem").innerHTML = 0;
  } else if (count >= 1) {
    carrinho = 1000 * count;
    document.getElementById("precoTotal").innerHTML = `R$ ${total}`;
  }
}
function btMenos() {
  count--;
  let total = carrinho + carrinho2;
  document.getElementById("carrinhoItem").innerHTML = count;
  if (count <= 0) {
    document.getElementById("carrinhoItem").innerHTML = 0;
    document.getElementById("precoTotal").innerHTML = "R$ 0.00";
  } else if (count >= 1) {
    document.getElementById("precoTotal").innerHTML = `R$ ${total}`;
  }
}

function btMais2() {
  count2++;
  let total = carrinho + carrinho2;
  document.getElementById("carrinhoItem2").innerHTML = count2;
  if (count2 <= 0) {
    document.getElementById("carrinhoItem2").innerHTML = 0;
  } else if (count2 >= 1) {
    carrinho2 = 2000 * count2;
    document.getElementById("precoTotal").innerHTML = `R$ ${total} `;
  }
}

function btMenos2() {
  count2--;
  let total = carrinho + carrinho2;
  document.getElementById("carrinhoItem2").innerHTML = count2;
  if (count2 <= 0) {
    document.getElementById("carrinhoItem2").innerHTML = 0;
    document.getElementById("precoTotal").innerHTML = "R$ 0.00";
  } else if (count >= 1) {
    document.getElementById("precoTotal").innerHTML = `R$ ${total} `;
  }
}
