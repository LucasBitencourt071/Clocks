(function () {
  const cep = document.querySelector("input[name=cep]");

  cep.addEventListener("blur", (e) => {
    const value = cep.value.replace(/[^0-9]+/, "");
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.logradouro) {
          document.querySelector("input[name=rua]").value = json.logradouro;
          document.querySelector("input[name=bairro]").value = json.bairro;
          document.querySelector("input[name=cidade]").value = json.localidade;
          document.querySelector("input[name=estado]").value = json.uf;
        }
      });
  });
})();

let count = 0;
let precoTotal = parseInt(document.getElementById("precoTotal").value);
// let precoTotal2 = document.getElementById("precoTotal").value;
function btMais() {
  count++;
  document.getElementById("carrinhoItem").innerHTML = count;
  if (count <= 0) {
    document.getElementById("carrinhoItem").innerHTML = 0;
  } else if (count >= 1) {
    document.getElementById("precoTotal").innerHTML = `R$ ${1000 * count}`;
  }
}
function btMenos() {
  count--;
  document.getElementById("carrinhoItem").innerHTML = count;
  if (count <= 0) {
    document.getElementById("carrinhoItem").innerHTML = 0;
    document.getElementById("precoTotal").innerHTML = "R$ 0.00";
  } else if (count >= 1) {
    document.getElementById("precoTotal").innerHTML = `R$ ${1000 * count}`;
  }
}

function btMais2() {
  count++;
  document.getElementById("carrinhoItem2").innerHTML = count;
  if (count <= 0) {
    document.getElementById("carrinhoItem2").innerHTML = 0;
  } else if (count >= 1) {
    document.getElementById("precoTotal").innerHTML = `R$ ${2000 * count}`;
  }
}

function btMenos2() {
  count--;
  document.getElementById("carrinhoItem2").innerHTML = count;
  if (count <= 0) {
    document.getElementById("carrinhoItem2").innerHTML = 0;
    document.getElementById("precoTotal").innerHTML = "R$ 0.00";
  } else if (count >= 1) {
    document.getElementById("precoTotal").innerHTML = `R$ ${2000 * count}`;
  }
}
