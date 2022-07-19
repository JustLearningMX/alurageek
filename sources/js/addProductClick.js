const btnAgregarProducto = document.querySelector('.btnAgregarProducto');

btnAgregarProducto.addEventListener('click', handlerClick);

function handlerClick(e) {
    e.preventDefault();
    window.location.href = '../pages/addProduct.html';
}