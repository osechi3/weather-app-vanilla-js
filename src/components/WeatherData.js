import { Component } from './Component'

export class WeatherData extends Component {
  constructor (parentElement, shouldRender) {
    super(parentElement, shouldRender)
    this.parentElement = parentElement
    this.weatherData = {}
  }

  getWeatherData () {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const APIKey = 'fd7cfe090aef0df3ea6c07e20f009d58'
    return fetch(`${baseURL}?q=California&appid=${APIKey}`, { mode: 'cors' })
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
        this.weatherData = fetchedWeatherData
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    // Updating the old element if there is one
    const previousElement = document.querySelector('#container-data')
    if (previousElement) this.parentElement.removeChild(previousElement)

    const containerData = this.createBaseElement('div', null, 'container-data')
    containerData.innerHTML = `
      <div class="block-main-info">
        <div class="group-icon">
          <img src="#">
          <p
            class="description-icon">${this.weatherData.weatherDescription.main}
          </p>
        </div>
        <div class="group-temperature">
          <p>${this.weatherData.temperatureKelvin}</p>
          <div class="buttons-temperature">
            <button id="btn-celsius" type="button">°C</button>
            <button id="btn-fahrenheit" type="button">°F</button>
          </div>
        </div>
      </div>
      <div class="block-additional-info">
        <p class="description-additional-info">Feels like: ${this.weatherData.temperatureFeelsLike}</p>
        <p class="description-additional-info">Wind: ${this.weatherData.windSpeed} m/s</p>
        <p class="description-additional-info">Humidity: ${this.weatherData.humidityLevel}%</p>
        <p class="description-additional-info">${this.weatherData.timezoneShift}</p>
      </div>
    `
  }
}
