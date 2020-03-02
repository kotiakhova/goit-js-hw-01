'use strict'

let input;
let total = 0;

do {
    input = prompt('Введите число.');
    if(Number.isNaN(Number(input)) === false) {
        total = total + Number(input);
    } else {
        alert('Было введено не число, попробуйте еще раз.');
    }
  } while (input !== null);
  

 alert( `Общая сумма чисел равна ${total}` );