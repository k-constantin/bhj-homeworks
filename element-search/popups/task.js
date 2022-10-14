const winMain = document.getElementById("modal_main");
const allClose = document.querySelectorAll('.modal__close_times');
const show = document.querySelector(".show-success");
const winSuccess = document.getElementById("modal_success");

winMain.classList.add('modal_active');

show.onclick = function() {
    winMain.classList.remove('modal_active');
    winSuccess.classList.add('modal_active');  
}

/*allClose[0].onclick = function() {
    winMain.classList.remove('modal_active');
}
allClose[2].onclick = function() {
    winSuccess.classList.remove('modal_active');
}*/

allClose.forEach (item => {
    item.onclick = function() {
        item.closest('.modal').classList.remove('modal_active');
    }
})