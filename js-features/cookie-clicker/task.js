const click = document.getElementById("clicker__counter");
const cook = document.getElementById("cookie");
cook.onclick = function() {
    let i = +click.textContent;
    i += 1;
    click.textContent = i;
    if (cook.width === 200) {
        cook.width = 400;
    } else cook.width = 200;
     if (i === 30) {
        click.textContent = 0;  
     }     
}
