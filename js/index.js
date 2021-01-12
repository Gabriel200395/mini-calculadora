document.getElementById("calcular").addEventListener("click", calculadora);
let resposta = document.getElementById("res");

function calculadora(event) {
  event.preventDefault();
  let isNumero = Number(document.getElementById("isNumero").value);
  let isNumeroOne = Number(document.getElementById("isNumeroOne").value);
  let sinalAritmetico = document.getElementById("sinal").value;
  sinalAritmetico = sinalAritmetico.split(" ");

  validarInput(isNumero, isNumeroOne);
  operacoes(isNumero, isNumeroOne, sinalAritmetico);
}

//validarMeusInputs
function validarInput(isNumero, isNumeroOne) {
  if (isNumero == " " || isNumeroOne == " ") {
    alert("preenchar os campos");
  }
}

//verificarMinhasOperaçoes
function operacoes(valor1, valor2, sinal) {
  for (i = 0; i < sinal.length; i++) {
    if (sinal[i] === "+") {
      somar(valor1, valor2);
    } else if (sinal[i] === "-") {
      subtrair(valor1, valor2);
    } else if (sinal[i] === "x") {
      multiplicar(valor1, valor2);
    } else if (sinal[i] === "÷") {
      divisao(valor1, valor2);
    } else {
      resposta.innerHTML = "Ops Operadodor não existente !!!";
    }
  }

  document.getElementById("form").reset();
}

//calculosAritmeticos
function somar(valor1, valor2) {
  let somarNumbers = valor1 + valor2;
  arrayNumbers.push(somarNumbers);
  calcularTotalNumber(arrayNumbers);

  return valor1, valor2;
}
function subtrair(valor1, valor2) {
  let subtrairNumbers = valor1 - valor2;
  arrayNumbers.push(subtrairNumbers);
  calcularTotalNumber(arrayNumbers);

  return valor1, valor2;
}
function multiplicar(valor1, valor2) {
  let multiplicarNumbers = valor1 * valor2;
  arrayNumbers.push(multiplicarNumbers);
  calcularTotalNumber(arrayNumbers);

  return valor1, valor2;
}
function divisao(valor1, valor2) {
  let divisaoNumbers = valor1 / valor2;
  arrayNumbers.push(divisaoNumbers);
  calcularTotalNumber(arrayNumbers);

  return valor1, valor2;
}

let arrayNumbers = [];

//calcularTotaldeNumbers
function calcularTotalNumber(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  resposta.innerHTML = `${total}`;

  return array;
}
