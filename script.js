"use strict";

/* 1. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном '1', 1, 3.     */

let a = '1';
if(a == '1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}
let b = 1;
if(b == 1){
    console.log('Верно');
}else{
    console.log('Неверно');
}
let c = 3;
if(c == 3){
    console.log('Верно');
}else{
    console.log('Неверно');
}

let p = '1';
let zxc = (a == '1') ? console.log('Верно') : console.log('Неверно');


/* 2. Если переменная item не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу 
скрипта при item, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.  */

let item = true;
if(item != true){
    console.log('Верно');
}else{
    console.log('Неверно');
}

let item2 = true;
let cond = (item2 != true) ? console.log('Verno') : console.log('Neverno');


/* 3. Если переменная a больше нуля и меньше 4-ти, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 4, 0, -3, 2.  */

let x = 2;
if(a > 0 && a < 4){
    console.log('Верно')
}else{
    console.log('Неверно')
}

let z = 2;
let qwe = (z > 0 && z < 4) ? console.log('Verno') : console.log('Neverno');

/* 4. Если переменная q больше 3-х и меньше 12-ти, или переменная w больше или равна 7-и и меньше 15-ти,
то выведите 'Верно', в противном случае выведите 'Неверно'.  */

let q = 13, w = 16;
if(q > 3 && q < 12 || w >= 7 && w < 15){
    console.log('Верно');
}else{
    console.log('Неверно');
}

let n = 13, m = 16;
let rty = (n > 3 && n < 12 || m >= 7 && m < 15) ? console.log('Верно') : console.log('Неверно');


/* 5. В переменной month лежит какое-то число из интервала от 1 до 12.
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень)  */

let month = 12;
if(month == 12 || month <= 2){
    console.log('Winter');
}
if(month <= 8 && month >= 6){
    console.log('Summer');
}
if(month <= 5 && month >= 3){
    console.log('Spring');
}
if(month <= 11 && month >= 9){
    console.log('Outum');
}


// 6. Выведите в консоли столбец четных чисел в промежутке от 0 до 100. (используя for или while)

for(let i = 0; i <= 100; i++){
    if(i % 2 !== 1){
        console.log(i);
    }
};



















