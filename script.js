const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const nextBtn = document.querySelector('.carousel-next-btn')
const prevBtn = document.querySelector('.carousel-prev-btn')

const slideWidth = slides[0].getBoundingClientRect().width

console.log(slides)
const setSlidePosition = (slide, index)=>{
  slide.style.left = slideWidth * index +'px'
}

slides.forEach(setSlidePosition)

const moveSlide = (track, currentSlide, targetSlide) => {
  const amountToMove = targetSlide.style.left
  track.style.transform = `translateX(-${amountToMove})`
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
  console.log(`translateX(-${amountToMove})`)
}

nextBtn.addEventListener('click', ()=>{
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling
  moveSlide(track, currentSlide, nextSlide)
})

prevBtn.addEventListener('click', ()=>{
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling
  moveSlide(track, currentSlide, prevSlide)
})