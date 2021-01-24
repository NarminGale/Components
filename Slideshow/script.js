const left = document.querySelector('.left')
const right = document.querySelector('.right')

const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

dots[0].classList.add('active')
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})

counter = 0
left.addEventListener('click', function () {
  counter--
  carousel()
  dotColor()
})
right.addEventListener('click', function () {
  counter++
  carousel()
  dotColor()
})

function dotColor() {
  dots.forEach(function (dot, index) {
    if (index === counter) {
      dot.classList.add('active')
    } else {
      dot.classList.remove('active')
    }
  })
}

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
