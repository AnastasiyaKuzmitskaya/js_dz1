"use strict";

//Task 1
let x = 20;
let y = 58;
let z = 42;
let w=x+y+z;
console.log(w);


//Task 2
let SecondMin=60;
let MinutesHour=60;
let HoursDay=24;
let DaysYears=365;
let myAge=25;
let myAgeInSeconds=SecondMin*MinutesHour*HoursDay*DaysYears*myAge;
console.log(myAgeInSeconds);


//Task 3
let count = 42;
let userName = '42';

//


console.log(`${count}`);

let countString=String(count) ;
console.log(countString);

//
console.log(+userName);

let userNameNumber=Number(userName); 
console.log(userNameNumber); 

//Task 4

let a =String(1);
let b = String(2);
let c = "белых медведей";
let s = a + b + " "+c;
console.log(s);

//Task 5

let  words_1='доступ';
let  words_2='морпех';
let words_3='наледь';
let words_4='попрек';
let words_5='рубило';

let lengthWords=words_1+words_2+words_3+words_4+words_5;
console.log(`${lengthWords} ${lengthWords.length}`);

//Task 7

let nameUser = prompt('Enter your name:');
let ageUser = prompt('Enter your age:');

console.log(`Hello, ${nameUser}, Your age is ${ageUser}`);





