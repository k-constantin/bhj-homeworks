const sizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

sizes.forEach (item => {
    item.addEventListener('click', (event) => {
    const active = document.querySelector('.font-size_active');
    active.classList.remove('font-size_active');
    item.classList.add('font-size_active');
    const attrsize = item.dataset.size;
    event.preventDefault();
    if (attrsize === 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small')
    } else if (attrsize === 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }
})  
})