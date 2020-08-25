import '../style.css'
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
      <input class="input-search" type="text" placeholder="Enter city"></input>
      <button class="btns btns-search">Search</button>
    `
    const input = containerSearch.querySelector('input')
    const button = containerSearch.querySelector('button')
    button.addEventListener('click', () => {
      App.sendWeatherRequest(input.value)
      this.moveInputTextToPlaceholder(input)
      button.classList.add('hidden')
    })

    input.addEventListener('input', function () {
      if (this.value !== '' && button.className.includes('hidden')) {
        button.classList.remove('hidden')
      }
    })
  }

  moveInputTextToPlaceholder (element) {
    element.placeholder = element.value
    element.value = ''
  }
}
