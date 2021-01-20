const countDownDate = new Date('Dec 30, 2021 21:37:25').getTime()
const timer = document.getElementById('timer')

const update = setInterval(function () {
  const now = new Date().getTime()
  const difference = countDownDate - now
  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)
  timer.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s `

  if (difference < 0) {
    clearInterval(update)
    timer.innerHTML = 'Time Up'
  }
}, 1000)
