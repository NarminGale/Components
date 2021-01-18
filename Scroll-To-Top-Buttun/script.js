const btn = document.getElementById('btn')

window.addEventListener('scroll', function () {
  if (window.scrollY > 20 || window.pageYOffset > 20) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
})

btn.addEventListener('click', function () {
  window.scrollTo(0, 0)
  window.pageYOffset(0, 0)
})
