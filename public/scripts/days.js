
$.ajax({
  type: "GET",
  url: "https://api.paperquotes.com/apiv1/quotes/?lang=ru",
  beforeSend: function (xhr) {
    xhr.setRequestHeader('Authorization', 'Token c3d3fcf3324e300dcdd052cfca8ec67061f0888b')
  },
  success: function (result) {
    console.log(result.results);
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  console.log(elems);
  var instances = M.FormSelect.init(elems);
});


document.getElementById('menu').addEventListener('click', async function () {
  const response = await fetch("https://api.paperquotes.com/apiv1/quotes/?lang=ru", {
    setRequestHeader: ('Authorization', 'Token c3d3fcf3324e300dcdd052cfca8ec67061f0888b')
  })
  const data = await response.json();
  console.log(data);

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  const qoute = data.results[randomInteger(1, 5)].quote;
  console.log(data.results[randomInteger(1, 5)].quote);
  let qouteText = document.getElementById('news');
  qouteText.innerHTML = qoute;
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var elemsTap = document.querySelector('.tap-target');
  var instancesTap = M.TapTarget.init(elemsTap);
  instancesTap.open();
  document.getElementById('menu').remove();
});

const cityWeather = document.getElementById('cityWeather');
console.log(cityWeather);
cityWeather.addEventListener('change', async function () {
  let getValue = cityWeather.value;
  const apiKey = '9ae65c6d5231d446fe85963b8e7f6977';
  let requestGetParams = `id=${getValue}&appid=${apiKey}`;
  console.log(getValue)
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?${requestGetParams}&lang=ru`)
  const data = await response.json()
  console.log(data)
  const nowDate = Date.now()
  console.log(nowDate)

  const sunrise = new Date(data.city.sunrise * 1000);
  const sunriseTime = (sunrise.getHours() < 10 ? "0" : "") + sunrise.getHours() + ":" + (sunrise.getMinutes() < 10 ? "0" : "") + sunrise.getMinutes() + ":" + (sunrise.getSeconds() < 10 ? "0" : "") + sunrise.getSeconds()
  // console.log(sunriseTime);


  const sunset = new Date(data.city.sunset * 1000);
  const sunsetTime = (sunset.getHours() < 10 ? "0" : "") + sunset.getHours() + ":" + (sunset.getMinutes() < 10 ? "0" : "") + sunset.getMinutes() + ":" + (sunset.getSeconds() < 10 ? "0" : "") + sunset.getSeconds()
  // console.log(sunsetTime)

document.getElementById('sunrise').innerText = `Время рассвета: ${sunriseTime} Время заката: ${sunsetTime}`;



  const dateFor = (nowDate + 86400000) / 1000;
  const dateArray = []
  const tempArray = []
  for (let i = 0; i < data.list.length; i++) {
    if (dateFor > data.list[i].dt) {
      dateArray.push(data.list[i].dt_txt)
    }
  }
  for (let i = 0; i < dateArray.length; i++) {
    tempArray.push(Math.round(data.list[i].main.temp - 273))
  }
  console.log(dateArray);
  console.log(tempArray);

  //передать в hbs переменные для отрисовки картинок в зависимости от города
  const res = await fetch('/weather.hbs');
  // document.getElementById('imgCar').remove();
  const template = await res.text();
  const myHBS = Handlebars.compile(template)
  console.log(getValue);
  if (getValue === '472459') {
    const element = myHBS({ city: 'vol' })
    document.getElementById('carousel').innerHTML = element
    const elems = document.querySelectorAll('.carousel')
    const instances = M.Carousel.init(elems)
  }
  if (getValue === '524894') {
    const element = myHBS({ city: 'mos' })
    document.getElementById('carousel').innerHTML = element
    const elems = document.querySelectorAll('.carousel')
    const instances = M.Carousel.init(elems)
  }
  if (getValue === '498817') {
    const element = myHBS({ city: 'sankt' })
    document.getElementById('carousel').innerHTML = element
    const elems = document.querySelectorAll('.carousel')
    const instances = M.Carousel.init(elems)
  }
  if (getValue === '491422') {
    const element = myHBS({ city: 'sochi' })
    document.getElementById('carousel').innerHTML = element
    const elems = document.querySelectorAll('.carousel')
    const instances = M.Carousel.init(elems)
  }

  const oneDay = await fetch(`https://api.openweathermap.org/data/2.5/weather?${requestGetParams}&lang=ru`);
  const oneDayData = await oneDay.json();
  // console.log(oneDayData);
  document.getElementById('temper').innerText = Math.round(oneDayData.main.temp_min - 273) + '-' + Math.round(oneDayData.main.temp_max - 273) + '. Ощущается как ' + Math.round(oneDayData.main.feels_like - 273);

  // document.getElementById('temper').innerText = Math.round(data.main.feels_like - 273);
  document.getElementById('wind').innerText = oneDayData.wind.speed + ' м/с';
  document.getElementById('icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${oneDayData.weather[0]['icon']}@2x.png">` + oneDayData.weather[0].description;
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);


  const ctx = document.getElementById('myChart');

  // console.log(ctx);
  // ctx.height = 150;
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dateArray,
      datasets: [{
        label: 'Температура',
        data: tempArray,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#004d40',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      plugins: {
        // Change options for ALL labels of THIS CHART
        datalabels: {
          align: 'top',
          color: '#004d40 '
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            sampleSize: 20,
            min: 8,
            beginAtZero: true,
            // stepSize: 1,
            stepWidth: 3,
            lineHeight: this.normalize
          }
        }]
      },
      gridLines: {
        display: false,
        drawTicks: false,
      }
    }
  })
  // document.getElementById('container').innerHTML = myChart
})