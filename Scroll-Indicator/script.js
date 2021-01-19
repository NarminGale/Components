const bar = document.getElementById('bar')

window.addEventListener('scroll', function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  bar.style.width = scrolled + '%'
})
