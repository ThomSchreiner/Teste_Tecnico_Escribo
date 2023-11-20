const desafio = (num) => {
  if (typeof num !== "number" || num <= 0) {
    return "Você deve enviar como parâmetro um número inteiro positivo!";
  }

  let divisiveis = 0;

  for (let i = 1; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      divisiveis += i;
    }
  }

  return divisiveis;
};

// Coloqueo o valor desejado como parâmetro na função abaixo
console.log(desafio(10));
