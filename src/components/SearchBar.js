import { Component } from './Component'
import { App } from '../index'

export class SearchBar extends Component {
  render () {
    const containerSearch = this.createElement('div', 'container-search')
    containerSearch.innerHTML = `
      <input type="text" placeholder="Enter city"></input>
      <button>Search</button>
    `
    const button = containerSearch.querySelector('button')
    button.addEventListener('click', App.sendWeatherRequest.bind(App))
  }
}
