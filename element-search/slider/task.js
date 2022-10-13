const sliders = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let val = 0;

next.onclick = function() {
    sliders[val].className = 'slider__item';
    if (val < sliders.length - 1) {
        val += 1; 
    } else {
        val = 0;
    }
    sliders[val].className = 'slider__item slider__item_active';
}

prev.onclick = function() {
    sliders[val].className = 'slider__item';
    if (val > 0) {
        val -= 1;
    } else {
        val = sliders.length - 1;
    }
    sliders[val].className = 'slider__item slider__item_active';
}