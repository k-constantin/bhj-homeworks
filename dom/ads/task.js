
    const rotator = document.querySelectorAll('.rotator__case');
    let index = 0;

      next = () => setTimeout(() => {
        if (index > rotator.length - 1) {
            index = 0;
        }
        let active = document.querySelector('.rotator__case_active');
        active.classList.remove('rotator__case_active');
        rotator[index].classList.add('rotator__case_active');
        index += 1;
        next();
      }, 1000 );
  
    next();
  