import '../style.css'
import { validateUserInput } from '../Validation'
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
      <input
        id="input-search"
        type="text"
        placeholder="Enter city"
        pattern="^[a-zA-ZäöüßÄÖÜ\\s]+$"
        required>
      </input>
      <button id="btn-search" class="btns" type="button">Search</button>
    `

    const button = containerSearch.querySelector('button')
    const input = containerSearch.querySelector('input')

    button.addEventListener('click', () => {
      if (validateUserInput()) {
        App.sendWeatherRequest(input.value)
        this.moveInputTextToPlaceholder(input)

        // Hiding Search button after submitting data
        button.classList.add('hidden')
      } else {
        console.log('The request has not been sent')
      }
    })

    // Showing Search button after the user types something into the input field
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
