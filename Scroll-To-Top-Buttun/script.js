const btn = document.getElementById('btn')

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
})

btn.addEventListener('click', function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
