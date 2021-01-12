document.getElementById("calcular").addEventListener("click", calculadora);

function calculadora(event) {
  event.preventDefault();
  let isNumero = Number(document.getElementById("isNumero").value);
  let isNumeroOne = Number(document.getElementById("isNumeroOne").value);
  let sinalAritmetico = document.getElementById("sinal").value;
  sinalAritmetico = sinalAritmetico.split(" ");

  validarInput(isNumero, isNumeroOne, sinalAritmetico);
  operacoes(isNumero, isNumeroOne, sinalAritmetico);
}

function validarInput(isNumero, isNumeroOne) {
  if (isNumero == " " || isNumeroOne == " ") {
    alert("preenchar os campos");
  }
}

function operacoes(valor1, valor2, sinal) {
  let resposta = document.getElementById("res");

  for (i = 0; i < sinal.length; i++) {
    if (sinal[i] === "+") {
      somar(valor1, valor2, resposta);
    } else if (sinal[i] === "-") {
      subtrair(valor1, valor2, resposta);
    } else if (sinal[i] === "x") {
      multiplicar(valor1, valor2, resposta);
    } else if (sinal[i] === "÷") {
      divisao(valor1, valor2, resposta);
    } else {
      resposta.innerHTML = "Ops Operadodor não existente";
    }
  }

  document.getElementById("form").reset();
}

function somar(valor1, valor2, resposta) {
  let somarNumbers = valor1 + valor2;
  arrayNumbers.push(somarNumbers);
  calcularTotalNumber(arrayNumbers, resposta);
}
function subtrair(valor1, valor2, resposta) {
  let subtrairNumbers = valor1 - valor2;
  arrayNumbers.push(subtrairNumbers);
  calcularTotalNumber(arrayNumbers, resposta);
}
function multiplicar(valor1, valor2, resposta) {
  let multiplicarNumbers = valor1 * valor2;
  arrayNumbers.push(multiplicarNumbers);
  calcularTotalNumber(arrayNumbers, resposta);
}
function divisao(valor1, valor2, resposta) {
  let divisaoNumbers = valor1 / valor2;
  arrayNumbers.push(divisaoNumbers);
  calcularTotalNumber(arrayNumbers, resposta);
}

let arrayNumbers = [];

function calcularTotalNumber(array, resposta) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  resposta.innerHTML = `${total}`;
}
