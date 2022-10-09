(() => {
    const killed = document.getElementById(`dead`);
    const missed = document.getElementById(`lost`);   
    getHole = index => document.getElementById(`hole${index}`);
    for (let index = 1; index < 10; index++){
        getHole(index).onclick = function () {
            let k = +missed.textContent;
            let i = +killed.textContent;
            if (getHole(index).className.includes(`hole_has-mole`)) { 
                i += 1;
                killed.textContent = i;
            } else {
                k += 1;
                missed.textContent = k;
            }
            if (i === 10) {
                killed.textContent = 0;
                missed.textContent = 0;
                alert ('Победа'); 
            }
           if (k === 5) {
                killed.textContent = 0;
                missed.textContent = 0;
                alert ("Поражение");
            }
        }  
    }
            
  })();
 