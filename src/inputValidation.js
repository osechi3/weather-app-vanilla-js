export function validateUserInput () {
  const inputSearch = document.querySelector('#input-search')

  if (inputSearch.validity.valueMissing) {
    showError('valueMissing')
    return false
  } else if (inputSearch.validity.patternMismatch) {
    showError('patternMismatch')
    return false
  } else {
    return true
  }
}

function showError (errorType) {
  const containerSearch = document.querySelector('#container-search')
  let message = document.querySelector('#message-error')

  // If there is a message delete it to avoid overlapping
  if (message) {
    containerSearch.removeChild(message)
  }

  message = document.createElement('p')
  message.id = 'message-error'

  if (errorType === 'valueMissing') {
    message.textContent = 'Please enter a city.'
  } else if (errorType === 'patternMismatch') {
    message.textContent = 'The name of the city can contain only ' +
      'the letters of the latin alphabet and umlauts.'
  } else {
    message.textContent = 'There has been an unknown error.'
  }

  containerSearch.append(message)

  // Displaying the message for 5 seconds
  setTimeout(() => {
    message.style.cssText = 'display: none'
  }, 5000)
}
