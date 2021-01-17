const feet = document.getElementById('feet')
const kilometer = document.getElementById('kilometer')
const meter = document.getElementById('meter')
const inche = document.getElementById('inche')
const yard = document.getElementById('yard')
const mile = document.getElementById('mile')

feet.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    inche.value = ''
    yard.value = ''
    kilometer.value = ''
    meter.value = ''
    mile.value = ''
  } else {
    inche.value = (value * 12).toFixed(2)
    yard.value = (value * 0.33333).toFixed(2)
    mile.value = (value * 0.00018939).toFixed(5)
    kilometer.value = (value / 3280.8).toFixed(5)
    meter.value = (value / 3.2808).toFixed(2)
  }
})
kilometer.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    inche.value = ''
    yard.value = ''
    feet.value = ''
    meter.value = ''
    mile.value = ''
  } else {
    inche.value = value * 39370
    yard.value = value * 1093.6
    mile.value = (value * 0.62137).toFixed(2)
    feet.value = value * 3280.8
    meter.value = value * 1000
  }
})
meter.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    inche.value = ''
    yard.value = ''
    kilometer.value = ''
    feet.value = ''
    mile.value = ''
  } else {
    inche.value = (value * 39.37).toFixed(2)
    yard.value = (value * 1.0936).toFixed(2)
    mile.value = (value * 0.00062137).toFixed(5)
    kilometer.value = (value / 1000).toFixed(5)
    feet.value = (value * 3.2808).toFixed(2)
  }
})

inche.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    feet.value = ''
    yard.value = ''
    kilometer.value = ''
    meter.value = ''
    mile.value = ''
  } else {
    feet.value = (value * 0.083333).toFixed(3)
    yard.value = (value * 0.027778).toFixed(3)
    mile.value = (value * 0.000015783).toFixed(6)
    kilometer.value = (value / 39370).toFixed(6)
    meter.value = (value / 39.37).toFixed(3)
  }
})
yard.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    inche.value = ''
    feet.value = ''
    kilometer.value = ''
    meter.value = ''
    mile.value = ''
  } else {
    inche.value = (value * 36).toFixed(2)
    feet.value = (value * 3).toFixed(2)
    mile.value = (value * 0.00056818).toFixed(5)
    kilometer.value = (value / 1093.6).toFixed(5)
    meter.value = (value / 1.0936).toFixed(2)
  }
})
mile.addEventListener('input', function (e) {
  const value = e.target.value
  if (value === '') {
    inche.value = ''
    yard.value = ''
    kilometer.value = ''
    meter.value = ''
    feet.value = ''
  } else {
    inche.value = value * 63360
    yard.value = value * 1760
    feet.value = value * 5280
    kilometer.value = (value / 0.62137).toFixed(2)
    meter.value = value / 0.00062137
  }
})
