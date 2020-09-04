
const selectCity = document.getElementById('city');
selectCity.addEventListener('change', function () {
  const getValue = selectCity.value;
  const apiKey = '9ae65c6d5231d446fe85963b8e7f6977';
  let requestGetParams = `id=${getValue}&appid=${apiKey}`;
  fetch(`https://api.openweathermap.org/data/2.5/weather?${requestGetParams}&lang=ru`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      // console.log(data);
      document.getElementById('feel').innerHTML = Math.round(data.main.feels_like - 273) + '&deg;';
      document.getElementById('weather').textContent = data.weather[0]['description'];
      document.getElementById('wind').innerHTML = data.wind.speed + ' м/с';
      document.getElementById('tem').innerHTML = Math.round(data.main.temp_min - 273) + '&deg;' + '-' + Math.round(data.main.temp_max - 273) + '&deg;';
      document.getElementById('icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    })
})




// let selectCity = document.getElementById('city');
// selectCity.addEventListener('change', function () {
//     let getValue = selectCity.value;
//     const apiKey = '9ae65c6d5231d446fe85963b8e7f6977';
//     let requestGetParams = `id=${getValue}&appid=${apiKey}`;
//     console.log(getValue)
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?${requestGetParams}&lang=ru`)
//         .then(function (resp) { return resp.json() })
//         .then(function (data) {
//             console.log(data);
//             // document.getElementById('feel').innerHTML = Math.round(data.main.feels_like - 273) + '&deg;';
//             // document.getElementById('weather').textContent = data.weather[0]['description'];
//             // document.getElementById('wind').innerHTML = data.wind.speed + ' м/с';
//             // document.getElementById('tem').innerHTML = Math.round(data.main.temp_min - 273) + '&deg;' + '-' + Math.round(data.main.temp_max - 273) + '&deg;';
//             // document.getElementById('icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//         })
//         .catch(function () {

//         })
// })        