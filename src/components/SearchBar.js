export class SearchBar {
  render () {
    const containerSearch = document.createElement('div')
    containerSearch.id = 'container-search'
    containerSearch.innerHTML = `
      <input type="text" placeholder="Enter city"></input>
      <button>Search</button>
    `
    return containerSearch
  }
}
