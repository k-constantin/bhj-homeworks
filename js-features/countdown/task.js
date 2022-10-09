let time = document.getElementById("timer");
let downLoadTimer = setInterval ( function() {
    if (time.textContent <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval (downLoadTimer);
        time.textContent = 59;
    }
    time.textContent -= 1; 
}, 1000);