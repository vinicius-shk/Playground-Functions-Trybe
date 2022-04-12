// Desafio 11
function generatePhoneNumber(array) {
  let telefone = "";
  function repeticao(array, numero) {
    let contador = 0;
    for(let key in array) {
      if(array[key] === numero) {
        contador += 1;
      }
    }
  return contador;
  }
  if(array.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for(let key in array) {
    if(repeticao(array, array[key]) >= 3 || array[key] < 0 || array[key] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else if(key === '0') {
      telefone += "(" + array[key];
    } else if(key === '1') {
      telefone += array[key] + ") ";
    } else if(key === '6') {
      telefone += array[key] + "-";
    } else {
      telefone += array[key];
    }
  }
return telefone;
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
