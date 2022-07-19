import { Seccion } from "../classes/Seccion.js";
import { CrearSeccion } from "../components/Seccion.js";
import { crearSecciones, secciones } from "../data/secciones.js";

crearSecciones();

allProducts();  

export function allProducts() {

    let todosLosArticulos = [];

    secciones.map( (seccion) => {
        todosLosArticulos.push(...seccion.articulos);
    });

    let seccion = [];
    
    
    const seccion1 = new Seccion('Todos los productos', todosLosArticulos, 'none');
    seccion.push(seccion1);

    CrearSeccion(seccion, '../assets/articles/', true);

    const btnAgregarProducto = document.querySelector('.btnAgregarProducto');
    
    if(btnAgregarProducto)
        btnAgregarProducto.parentElement.classList.add('inputContainer__btnAgregarProducto');
}