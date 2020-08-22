function getWeatherData () {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
  const APIKey = 'fd7cfe090aef0df3ea6c07e20f009d58'
  fetch(`${baseURL}?q=California&appid=${APIKey}`, { mode: 'cors' })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data)
      const fetchedWeatherData = {
        location: data.name,
        timezoneShift: data.timezone,
        windSpeed: data.wind.speed,
        temperatureKelvin: data.main.temp,
        temperatureFeelsLike: data.main.feels_like,
        humidityLevel: data.main.humidity,
        weatherDescription: data.weather[0]
      }
      console.log(fetchedWeatherData)
    })
    .catch(error => {
      console.log(error)
    })
}
console.log(getWeatherData())
