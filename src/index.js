import { WeatherData } from './components/WeatherData'
import { SearchBar } from './components/SearchBar'

export class App {
  static weatherData = new WeatherData()
  static searchBar = new SearchBar()

  static init () {
    this.render()
    this.weatherData.getWeatherData()
  }

  static render () {
    const rootElement = document.querySelector('#app')
    const mainContainer = document.createElement('div')

    rootElement.append(mainContainer)
    mainContainer.append(this.searchBar.render())
  }

  static sendWeatherRequest () {
    this.weatherData.getWeatherData()
  }
}

App.init()
