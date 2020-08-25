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
}
