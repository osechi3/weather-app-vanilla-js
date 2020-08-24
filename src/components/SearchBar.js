import { Component } from './Component'
import { App } from '../index'

export class SearchBar extends Component {
  constructor (parentElement, shouldRender) {
    super(parentElement, shouldRender)
    this._eslintUselessConstructor = 0
  }

  render () {
    const containerSearch = this.createBaseElement('div', null, 'container-search')
    containerSearch.innerHTML = `
      <input type="text" placeholder="Enter city"></input>
      <button>Search</button>
    `
    const button = containerSearch.querySelector('button')
    button.addEventListener('click', App.sendWeatherRequest.bind(App))
  }
}
