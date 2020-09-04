// function randomInteger(min, max) {
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }


// document.addEventListener('DOMContentLoaded', async function () {
//   const response = await fetch("https://api.paperquotes.com/apiv1/quotes/?lang=ru", {
//     setRequestHeader: ('Authorization', 'Token c3d3fcf3324e300dcdd052cfca8ec67061f0888b')
//   })
//   const data = await response.json();
//   console.log(data);
//   function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
//   const qoute = data.results[randomInteger(1, 5)].quote;
//   console.log(data.results[randomInteger(1, 5)].quote);
//   let qouteText = document.getElementById('news');
//   qouteText.innerHTML = qoute
// })