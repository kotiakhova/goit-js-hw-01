'use strict'

const userCountry = prompt('Введите страну.')
let cost;

switch (userCountry.toLowerCase()) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;
  
  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
if(cost) {
  alert(`Доставка в ${userCountry[0].toUpperCase() + userCountry.substr(1)} будет стоить ${cost} кредитов`);
}
