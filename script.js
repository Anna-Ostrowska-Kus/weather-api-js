const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK ='https://api.openweathermap.org/data/2.5/weather?q={city name}'
const API_KEY = '&appid=35315198bccf655d47a81a0da072dcaa'
const API_UNITS = '&units=metric'
