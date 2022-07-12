import { crearElemento } from "../utils/crearNodos.js";
import { crearSecciones, secciones } from "../data/secciones.js";
const __dir = './sources/assets/articles/';

crearSecciones();

const areaDeLasSecciones = document.querySelector('.main__secciones');

const clases = {
    main__secciones__contenedor: 'main__secciones__contenedor',
    main__secciones__head: 'main__secciones__head',
    secciones__head_title: 'secciones__head-title',
    secciones__head_link: 'secciones__head-link',

    main__secciones__gridCards: 'main__secciones__gridCards',
    secciones__gridCards__card: 'secciones__gridCards__card',
    gridCards__card__imgContainer: 'gridCards__card__imgContainer',
    card__imgContainer_img: 'card__imgContainer-img',
    gridCards__card__datos: 'gridCards__card__datos',
    card__datos_nombre: 'card__datos-nombre',
    card__datos_precio: 'card__datos-precio',
    card__datos_link: 'card__datos-link',


};

export const CrearSeccion = (arrayDeSecciones) => {

    if(!arrayDeSecciones) {
        throw new Error('No existen Secciones para mostrar en la tienda');
    }

    try {
        
        arrayDeSecciones.map( (seccion)=> {
            const secciones__contenedor = crearElemento('div', [{type: 'class', name: `${clases.main__secciones__contenedor}`}]);
            const head = crearHead(seccion);
            
            secciones__contenedor.appendChild(head);

            const gridCards = crearGridCards(seccion.articulos);

            secciones__contenedor.appendChild(gridCards);
            
            areaDeLasSecciones.appendChild(secciones__contenedor);
        });
        
    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }   
    
}

CrearSeccion(secciones);

function crearHead(seccion) {
    const secciones_head = crearElemento('div', [{type: 'class', name: `${clases.main__secciones__head}`}]); 
    const headTitle = crearElemento('h1', [{type: 'class', name: `${clases.secciones__head_title}`}]); 
    const headLink = crearElemento('a', [
        {type: 'class', name: `${clases.secciones__head_link}`},
        {type: 'href', name: `${seccion.link}`},
        {type: 'target', name: `_blank`}
    ]);

    headTitle.textContent = seccion.nombre;
    headLink.textContent = 'Ver todo →';

    secciones_head.appendChild(headTitle);
    secciones_head.appendChild(headLink);

    return secciones_head;
}

function crearGridCards(articulos) {

    const gridCards = crearElemento('div', [{type: 'class', name: `${clases.main__secciones__gridCards}`}]);        

    articulos.map( (articulo)=> {

        const imgUrl = __dir + articulo.imagen;        
        const card = crearElemento('div', [{type: 'class', name: `${clases.secciones__gridCards__card}`}]);

        const imgCardContainer = crearElemento('div', [{type: 'class', name: `${clases.gridCards__card__imgContainer}`}]);
        const imgCard = crearElemento('img', [
            {type: 'class', name: `${clases.card__imgContainer_img}`}, 
            {type: 'src', name: `${imgUrl}`},
            {type: 'alt', name: `${articulo.nombre}`}]);

        imgCardContainer.appendChild(imgCard);

        card.appendChild(imgCardContainer);

        const cardDatosContainer = crearElemento('div', [{type: 'class', name: `${clases.gridCards__card__datos}`}]);
        const datosNombre = crearElemento('p', [{type: 'class', name: `${clases.card__datos_nombre}`}]);
        const datosPrecio = crearElemento('p', [{type: 'class', name: `${clases.card__datos_precio}`}]);
        const datosLink = crearElemento('a', [
            {type: 'class', name: `${clases.card__datos_link}`},
            {type: 'href', name: `${articulo.link}`},
            {type: 'target', name: `_blank`}
        ]);

        datosNombre.textContent = articulo.nombre ? articulo.nombre : 'Sin nombre';
        datosPrecio.textContent = articulo.precio ? '$'+parseInt(articulo.precio).toFixed(2) : 'Sin precio';
        datosLink.textContent = 'Ver producto';

        cardDatosContainer.appendChild(datosNombre);
        cardDatosContainer.appendChild(datosPrecio);
        cardDatosContainer.appendChild(datosLink);

        card.appendChild(cardDatosContainer);

        gridCards.appendChild(card);        

    });

    return gridCards;
        
}