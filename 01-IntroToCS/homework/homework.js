'use strict';

function BinarioADecimal(num) {
      let binario = num.split('');
      let multiplicador = 1
      let decimal = []
   
      for (let i = binario.length - 1; i >= 0  ; i--) {
         decimal.push(binario[i] * multiplicador)
         multiplicador = multiplicador * 2
      }
  
      return decimal.reduce((acum,currentVal) => acum + currentVal)
}

function DecimalABinario(num) {
  let resto = num;
  let binario = [];

  while (resto >= 1) {
    if (resto % 2) {
      binario.unshift("1");
    } else {
      binario.unshift("0");
    }
    resto = Math.floor(resto / 2)
    
  }

  return binario.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
