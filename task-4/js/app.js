'use strict'

const credits = 23580;
const pricePerDroid = 3000;

const amountOfDroid = prompt('Сколько дроидов хотите преобрести?');

if( amountOfDroid === null ) {
    alert('Отменено пользователем!');
} else {
    const totalPrice = amountOfDroid * pricePerDroid;
    if ( credits >=  totalPrice) {
        alert(`Вы купили ${amountOfDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    } else {
        alert('Недостаточно средств на счету!');
    }
}