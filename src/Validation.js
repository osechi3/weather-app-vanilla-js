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

export function validateAPIRequest (errorType, isOk) {
  console.log('Validating API request...')
  if (isOk) {
    return true
  } else if (errorType === 404) {
    showError(404)
    return false
  } else {
    showError()
    return false
  }
}

function showError (errorType = null) {
  const containerApp = document.querySelector('#app')
  let message = document.querySelector('#message-error')

  // If there is a message delete it to avoid overlapping
  if (message) {
    containerApp.removeChild(message)
  }

  message = document.createElement('p')
  message.id = 'message-error'

  if (errorType === 'valueMissing') {
    message.textContent = 'Please enter a city.'
  } else if (errorType === 'patternMismatch') {
    message.textContent = 'The name of the city can contain only ' +
      'the letters of the latin alphabet and umlauts.'
  } else if (errorType === 404) {
    message.textContent = 'The city is not found.'
  } else {
    message.textContent = 'There has been an unknown error.'
  }

  containerApp.append(message)

  // Displaying the message for 5 seconds
  setTimeout(() => {
    message.style.cssText = 'display: none'
  }, 5000)
}
