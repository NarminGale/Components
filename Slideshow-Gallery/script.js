// select items
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slides = document.querySelectorAll('.slide')
const images = document.querySelectorAll('.image img')

images[0].classList.remove('demo')
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`
})

counter = 0
left.addEventListener('click', function () {
  counter--
  carousel()
  imageOverlay()
})
right.addEventListener('click', function () {
  counter++
  carousel()
  imageOverlay()
})

function imageOverlay() {
  images.forEach(function (image, index) {
    if (index === counter) {
      image.classList.remove('demo')
    } else {
      image.classList.add('demo')
    }
  })
}

images.forEach(function (image, index) {
  image.addEventListener('click', function () {
    counter = index
    carousel()
  })
})

function carousel() {
  if (counter > slides.length - 1) {
    counter = 0
  }
  if (counter < 0) {
    counter = slides.length - 1
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
  images.forEach(function (image, index) {
    if (index === counter) {
      image.classList.remove('demo')
    } else {
      image.classList.add('demo')
    }
  })
}
