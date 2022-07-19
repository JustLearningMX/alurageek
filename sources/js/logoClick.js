const logoContainer = document.querySelector('.encabezado__rotuloContainer');

logoContainer.addEventListener('click', handlerClick);

function handlerClick(e) {
    e.preventDefault();
    window.location.href = '/';
}