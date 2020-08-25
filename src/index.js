import './style.css'
import { WeatherData } from './components/WeatherData'
import { SearchBar } from './components/SearchBar'

export class App {
  static rootElement = document.querySelector('#app')
  static searchBar = new SearchBar(this.rootElement)
  static weatherData = new WeatherData(this.rootElement, false)

  static async sendWeatherRequest (city) {
    try {
      this.weatherData.renderLoadingAnimation()
      await this.weatherData.getWeatherData(city)
      this.weatherData.render()
    } catch (error) {
      console.log(error)
    }
  }

  static displayWelcomeMessage () {
    const rootElement = document.querySelector('#app')
    const containerData = document.createElement('div')
    containerData.id = 'container-data'
    containerData.innerHTML = `
      <div id="message-welcome">
        Type a city name in the field above to find out the weather there.
      </div>
    `
    rootElement.append(containerData)
  }
}

App.displayWelcomeMessage()
