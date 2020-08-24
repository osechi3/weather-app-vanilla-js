import { WeatherData } from './components/WeatherData'
import { SearchBar } from './components/SearchBar'

export class App {
  static weatherData = new WeatherData()
  static searchBar = new SearchBar()
  static mainContainer = document.createElement('div')
  static rootElement = document.querySelector('#app')

  static init () {
    this.render()
  }

  static render () {
    this.rootElement.append(this.mainContainer)
    this.mainContainer.append(this.searchBar.render())
  }

  static async sendWeatherRequest () {
    await this.weatherData.getWeatherData()
    this.mainContainer.append(this.weatherData.render())
  }
}

App.init()
