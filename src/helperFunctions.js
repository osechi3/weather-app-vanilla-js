function calculateTime (timezoneShift) {
  const currentLocalTimeMs = new Date().getTime()
  const localOffsetUTCMs = new Date().getTimezoneOffset() * 60 * 1000
  const currentUTCTime = currentLocalTimeMs + localOffsetUTCMs
  const desiredTime = currentUTCTime + timezoneShift * 1000
  let desiredTimeHours = new Date(desiredTime).getHours()
  let desiredTimeMinutes = new Date(desiredTime).getMinutes()

  if (desiredTimeHours < 10) (desiredTimeHours = '0' + desiredTimeHours)
  if (desiredTimeMinutes < 10) (desiredTimeMinutes = '0' + desiredTimeMinutes)

  // console.log(desiredTimeHours + ':' + desiredTimeMinutes)
  return desiredTimeHours + ':' + desiredTimeMinutes
}

function convertToCelsius (temperatureKelvin) {
  return Math.round(temperatureKelvin - 273.15)
}

function convertToFahrenheit (temperatureKelvin) {
  return Math.round(temperatureKelvin * 1.8 - 459.67)
}

export {
  calculateTime,
  convertToCelsius,
  convertToFahrenheit
}
