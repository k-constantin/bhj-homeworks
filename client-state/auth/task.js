const signin = document.getElementById('signin');
const welcomeMsg = document.querySelector('.welcome');
const idElem = document.getElementById('user_id');
const form = document.getElementById('signin__form');
signin.classList.add('signin_active');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success === true) {
                signin.classList.remove('signin_active');
                const userId = response['user_id'];
                localStorage.setItem =('id', userId);
                welcomeMsg.classList.add('welcome_active');
                idElem.textContent = userId;
            } else {
                alert("неверный логин или пароль");
            }
            form.reset();
        }
    
    }
    xhr.send(data);
})