const logoContainer = document.querySelector('.encabezado__rotuloContainer');

logoContainer.addEventListener('click', handlerClick);

function handlerClick(e) {
    e.preventDefault();
    const path = window.location.hostname === '127.0.0.1' ? '/' : '/alurageek';
    window.location.href = path;
}