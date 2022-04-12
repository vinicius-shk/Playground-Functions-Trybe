// Desafio 1
function compareTrue(input1, input2) {
  if(input1 === true && input2 === true) {
    return true;
  }
return false;
}

// Desafio 2
function calcArea(base, height) {
 return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringUser) {
let arrayRetorno = [];
let palavra = '';
for(let key in stringUser) {
  if(stringUser[key] !== " "){
    palavra += stringUser[key];
  } else {
    arrayRetorno.push(palavra);
    palavra = '';
  }

}
arrayRetorno.push(palavra);
return arrayRetorno;
}

// Desafio 4
function concatName(array) {
return array[array.length -1] + "," + " " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let contador = 0;
  for(let key1 in arrayNumeros) {
    if(arrayNumeros[key1] > maiorNumero) {
      maiorNumero = arrayNumeros[key1];
    }
  }
  for(let key3 in arrayNumeros) {
    if(arrayNumeros[key3] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  }
return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
