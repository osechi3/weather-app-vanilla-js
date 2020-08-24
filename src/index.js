import { WeatherData } from './components/WeatherData'
import { SearchBar } from './components/SearchBar'

export class App {
  static rootElement = document.querySelector('#app')
  static searchBar = new SearchBar(this.rootElement)
  static weatherData = new WeatherData(this.rootElement, false)

  static async sendWeatherRequest () {
    try {
      await this.weatherData.getWeatherData()
      this.weatherData.render()
    } catch (error) {
      console.log(error)
    }
  }
}
