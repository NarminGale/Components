const left = document.querySelector('.left')
const right = document.querySelector('.right')

const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})

counter = 0
left.addEventListener('click', function () {
  counter--
  carousel()
})
right.addEventListener('click', function () {
  counter++
  carousel()
})

function carousel() {
  if (counter == slides.length) {
    counter = 0
  }
  if (counter < 0) {
    counter = slides.length - 1
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}
