const slides = document.getElementsByClassName('carousel__item');
const slidesTotal = slides.length;
const nextButton = document.querySelector('#carousel__button--next');
const prevButton = document.querySelector('#carousel__button--prev');
let moviePoster = document.querySelector('.movie-poster');
let modal = document.querySelector('#myModal');
let closeBtn = document.querySelector('.closeBtn');
let modalImage = document.querySelector('.movie-poster-modal');


let slidePosition = 0;

nextButton.addEventListener('click', () => {

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === slidesTotal - 1) {
        slidePosition = 0
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add('carousel__item--visible');

});


prevButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === 0) {
        slidePosition = slidesTotal - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add('carousel__item--visible');
});

moviePoster.addEventListener('click', ()=>{
    console.log('image clicked');
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
});

window.addEventListener('click', (event)=> {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});