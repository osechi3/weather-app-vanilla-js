import '../style.css'
import { Component } from './Component'
import {
  calculateTime,
  convertToCelsius,
  convertToFahrenheit
} from '../helperFunctions'

export class WeatherData extends Component {
  constructor (parentElement, shouldRender) {
    super(parentElement, shouldRender)
    this.parentElement = parentElement
    this.weatherData = {}
  }

  getWeatherData (city) {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const APIKey = 'fd7cfe090aef0df3ea6c07e20f009d58'
    return fetch(`${baseURL}?q=${city}&appid=${APIKey}`, { mode: 'cors' })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        console.log(data)
        const fetchedWeatherData = {
          location: data.name,
          time: calculateTime(data.timezone),
          windSpeed: data.wind.speed,
          temperatureKelvin: data.main.temp,
          temperatureFeelsLike: data.main.feels_like,
          humidityLevel: data.main.humidity,
          weatherDescription: data.weather[0],
          iconURL: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
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
          <img src="${this.weatherData.iconURL}">
          <p id="description-icon">
            ${this.weatherData.weatherDescription.main}
          </p>
        </div>
        <div class="group-temperature">
          <p id="description-temperature">
            ${convertToCelsius(this.weatherData.temperatureKelvin)}°C
          </p>
          <div class="buttons-temperature">
            <button class="btns btns-data" id="btn-celsius" type="button">°C</button>
            <button class="btns btns-data" id="btn-fahrenheit" type="button">°F</button>
          </div>
        </div>
      </div>
      <div class="block-additional-info">
        <p class="description-additional-info" id="description-feels-like">
          Feels like: ${convertToCelsius(this.weatherData.temperatureFeelsLike)}°C
        </p>
        <p class="description-additional-info">
          Wind: ${this.weatherData.windSpeed} m/s
        </p>
        <p class="description-additional-info">
          Humidity: ${this.weatherData.humidityLevel}%
        </p>
        <p
          class="description-additional-info"
          id="description-time">
          ${this.weatherData.time}
        </p>
      </div>
    `

    const buttonCelsius = containerData.querySelector('#btn-celsius')
    const buttonFahrenheit = containerData.querySelector('#btn-fahrenheit')
    const descriptionTemperature =
      containerData.querySelector('#description-temperature')
    const descriptionFeelsLike =
      containerData.querySelector('#description-feels-like')

    buttonCelsius.addEventListener('click', () => {
      descriptionTemperature.innerHTML = `
        <p id="description-temperature">
          ${convertToCelsius(this.weatherData.temperatureKelvin)}°C
        </p>
      `
      descriptionFeelsLike.innerHTML = `
        <p class="description-additional-info" id="description-feels-like">
          Feels like: ${convertToCelsius(this.weatherData.temperatureFeelsLike)}°C
        </p>
      `
    })

    buttonFahrenheit.addEventListener('click', () => {
      descriptionTemperature.innerHTML = `
        <p id="description-temperature">
          ${convertToFahrenheit(this.weatherData.temperatureKelvin)}°F
        </p>
      `
      descriptionFeelsLike.innerHTML = `
        <p class="description-additional-info" id="description-feels-like">
          Feels like: ${convertToFahrenheit(this.weatherData.temperatureFeelsLike)}°F
        </p>
      `
    })
  }

  renderLoadingAnimation () {
    const rootElement = document.querySelector('#app')
    const containerData = document.querySelector('#container-data')
    if (containerData === null) {
      const newContainerData = document.createElement('div')
      newContainerData.id = 'container-data'
      newContainerData.innerHTML = '<div class="loaders"></div>'
      rootElement.append(newContainerData)
    } else {
      containerData.innerHTML = '<div class="loaders"></div>'
    }
  }
}
