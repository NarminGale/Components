const fahrenheit = document.getElementById('fahrenheit')
const celsius = document.getElementById('celsius')
const kelvin = document.getElementById('kelvin')

fahrenheit.addEventListener('input', function (e) {
  const value = e.target.value

  if (value === '') {
    celsius.value = ''
    kelvin.value = ''
    ounce.value = ''
  } else {
    celsius.value = ((value - 32) / 1.8).toFixed(2)
    kelvin.value = ((value - 32) / 1.8 + 273.15).toFixed(2)
  }
})

celsius.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    fahrenheit.value = ''
    kelvin.value = ''
  } else {
    fahrenheit.value = (value * 1.8 + 32).toFixed(2)
    kelvin.value = (value + 273.15).toFixed(2)
  }
})
kelvin.addEventListener('input', function (e) {
  const value = e.target.value

  if (value === '') {
    fahrenheit.value = ''
    celsius.value = ''
  } else {
    fahrenheit.value = ((value - 273.15) * 1.8 + 32).toFixed(2)
    celsius.value = (value - 273.15).toFixed(2)
  }
})
