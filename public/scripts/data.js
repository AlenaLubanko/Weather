let nday = new Date()
let greeting;
let hour = nday.getHours(); if (hour >= 5 && hour < 12) greeting = "Доброе утро! Сегодня "; else { if (hour >= 12 && hour < 18) greeting = "Добрый день! Сегодня "; else { if (hour >= 18 && hour < 24) greeting = "Добрый вечер! Сегодня "; else { if (hour >= 0 && hour<5) greeting = "Доброй ночи! Сегодня "; } } } 
// document.write(greeting);


let todayDate = new Date();
// console.log(todayDate);

let day = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");

let month = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");

let info = (day[todayDate.getDay()] + " " + todayDate.getDate() + " " + month[todayDate.getMonth()] + " " + todayDate.getFullYear() + " г.");

// console.log(day[todayDate.getDay()]); // Четверг

const div = document.createElement('div')
div.innerHTML = greeting;
// console.log(div);
let divGreet = document.getElementById('greeting');
// console.log(divGreet)
divGreet.appendChild(div);
div.innerHTML += info;
