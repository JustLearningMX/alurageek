const btnLogin = document.querySelector('.encabezado__loginBtn');

btnLogin.addEventListener('click', handlerClick);

function handlerClick(e) {
    e.preventDefault();
    window.location.href = './sources/pages/login.html';
}