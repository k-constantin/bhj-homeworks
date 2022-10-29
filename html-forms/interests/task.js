const interest = document.querySelectorAll('.interest');

interest.forEach(item => {
    const interestCheck = item.querySelectorAll('.interest__check');
    interestCheck[0].addEventListener ('change', function(){

        if (interestCheck[0].checked) {
            interestCheck.forEach(element => {
               element.checked = true; 
            }) 
        }
        if (!interestCheck[0].checked) {
            interestCheck.forEach(element => {
                element.checked = false; 
             })
        }
    })   
})