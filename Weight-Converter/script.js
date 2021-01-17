const kilogram = document.getElementById('kilogram')
const gram = document.getElementById('gram')
const pound = document.getElementById('pound')
const ounce = document.getElementById('ounce')

kilogram.addEventListener('input', function (e) {
  const value = e.target.value

  if (value === '') {
    gram.value = ''
    pound.value = ''
    ounce.value = ''
  } else {
    gram.value = value * 1000
    pound.value = value * 2.2
    ounce.value = value * 35.27
  }
})

gram.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    kilogram.value = ''
    pound.value = ''
    ounce.value = ''
  } else {
    kilogram.value = value * 0.001
    pound.value = value * 0.0022
    ounce.value = value * 0.035
  }
})
pound.addEventListener('input', function (e) {
  const value = e.target.value

  if (value === '') {
    gram.value = ''
    kilogram.value = ''
    ounce.value = ''
  } else {
    gram.value = value * 454
    kilogram.value = value * 0.45
    ounce.value = value * 16.0
  }
})
ounce.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    gram.value = ''
    pound.value = ''
    kilogram.value = ''
  } else {
    gram.value = value * 28.3
    pound.value = value * 0.0625
    kilogram.value = value * 0.0283
  }
})
