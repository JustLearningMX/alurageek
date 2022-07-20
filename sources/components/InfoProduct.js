import { crearElemento } from "../utils/crearNodos.js";
import { Seccion } from "../classes/Seccion.js";
import { CrearSeccion } from "../components/Seccion.js";

const sectionData_clases = {    
    seccionData: 'seccionData',
    seccionData_figure: 'seccionData_figure',
    seccionData_img: 'seccionData_img',
    seccionData_datos: 'seccionData_datos',
    seccionData_nombre: 'seccionData_nombre',
    seccionData_precio: 'seccionData_precio',
    seccionData_descripcion: 'seccionData_descripcion',

    seccionSimilares: 'seccionSimilares main__secciones containers',
};
    
const seccion = JSON.parse(window.localStorage.getItem('seccion'));
const articulo = JSON.parse(window.localStorage.getItem('articulo'));

crearViewProduct();

export function crearViewProduct() {
    
    const main = document.querySelector('.main');

    const seccionDatos = crearSeccionDatos(articulo);

    main.appendChild(seccionDatos);

    const seccionSimilares = crearElemento('section', [{type: 'class', name: `${sectionData_clases.seccionSimilares}`}]);
    main.appendChild(seccionSimilares);

    crearSeccionSimilares();
    
}

function crearSeccionDatos(articulo) {
    const __dir = '../assets/articles/'; //'./sources/assets/articles/';
    const imgUrl = __dir + articulo.imagen; 

    const seccionData = crearElemento('section', [{type: 'class', name: `${sectionData_clases.seccionData}`}]);
    const seccionData_figure = crearElemento('figure', [{type: 'class', name: `${sectionData_clases.seccionData_figure}`}]);
    const seccionData_img = crearElemento('img', [
        {type: 'class', name: `${sectionData_clases.seccionData_img}`}, 
        {type: 'src', name: `${imgUrl}`},
        {type: 'alt', name: `${articulo.nombre}`}]);

    seccionData_figure.appendChild(seccionData_img);
    seccionData.appendChild(seccionData_figure);

    const seccionData_datos = crearElemento('div', [{type: 'class', name: `${sectionData_clases.seccionData_datos}`}]);
    const seccionData_nombre = crearElemento('p', [{type: 'class', name: `${sectionData_clases.seccionData_nombre}`}]);
    const seccionData_precio = crearElemento('p', [{type: 'class', name: `${sectionData_clases.seccionData_precio}`}]);
    const seccionData_descripcion = crearElemento('p', [{type: 'class', name: `${sectionData_clases.seccionData_descripcion}`}]);

    seccionData_nombre.textContent = articulo.nombre ? articulo.nombre : 'Sin nombre';
    seccionData_precio.textContent = articulo.precio ? '$'+parseInt(articulo.precio).toFixed(2) : 'Sin precio';
    seccionData_descripcion.textContent = articulo.descripcion ? articulo.descripcion : 'Sin descripcion';

    seccionData_datos.appendChild(seccionData_nombre);
    seccionData_datos.appendChild(seccionData_precio);
    seccionData_datos.appendChild(seccionData_descripcion);
    seccionData.appendChild(seccionData_datos);

    return seccionData;
}

function crearSeccionSimilares() {
    
    const nombreSeccion = articulo.seccion;

    let articulosSimilares = [];

    seccion.articulos.map( (item)=> {        
        if(item.seccion === nombreSeccion) { //&& articulo.id !== item.id){
            articulosSimilares.push(item);
        }
    });

    let seccionArray = [];

    const items = articulosSimilares.sort((a,b)=> 0.5 - Math.random());

    const seccion1 = new Seccion('Productos similares', items, 'none');
    seccionArray.push(seccion1);
    
    CrearSeccion(seccionArray, '../assets/articles/', false);
}