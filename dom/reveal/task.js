window.addEventListener('scroll', function() {
    const div = document.querySelector('.reveal');
    const top = div.getBoundingClientRect().top;
    const bottom = div.getBoundingClientRect().bottom;
    if ((bottom > 0) && (top < window.innerHeight)) {
        div.classList.add('reveal_active');
    } else {
        div.classList.remove('reveal_active');
    }   

  });