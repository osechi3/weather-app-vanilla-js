import { Component } from './Component'

export class SearchBar extends Component {
  render () {
    const containerSearch = this.createElement('div', 'container-search')
    containerSearch.innerHTML = `
      <input type="text" placeholder="Enter city"></input>
      <button>Search</button>
    `
  }
}
