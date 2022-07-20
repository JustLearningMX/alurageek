import { crearElemento } from "../utils/crearNodos.js";
import { crearSecciones, secciones } from "../data/secciones.js";

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

    divInputContainer: 'form__inputContainer',
};

export function CrearSeccion(arrayDeSecciones, img, btnAgregarProducto) {
    const areaDeLasSecciones = document.querySelector('.main__secciones');

    if(!arrayDeSecciones) {
        crearSecciones();
        arrayDeSecciones = secciones;
    }
    
    const __dir = img ? img : './sources/assets/articles/';

    if(!arrayDeSecciones) {
        throw new Error('No existen Secciones para mostrar en la tienda');
    }

    try {
        
        arrayDeSecciones.map( (seccion)=> {
            
            const secciones__contenedor = crearElemento('div', [{type: 'class', name: `${clases.main__secciones__contenedor}`}]);
            const head = crearHead(seccion, btnAgregarProducto);
            
            secciones__contenedor.appendChild(head);

            const gridCards = crearGridCards(seccion.articulos, __dir, seccion);

            secciones__contenedor.appendChild(gridCards);
            
            areaDeLasSecciones.appendChild(secciones__contenedor);
        });
        
    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }   
    
}


function crearHead(seccion, btnAgregarProducto) {
    const secciones_head = crearElemento('div', [{type: 'class', name: `${clases.main__secciones__head}`}]); 
    const headTitle = crearElemento('h1', [{type: 'class', name: `${clases.secciones__head_title}`}]); 

    headTitle.textContent = seccion.nombre;
    secciones_head.appendChild(headTitle);

    if(btnAgregarProducto) {
        const divInputSubmitContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer}`}]);
        const inputBoton = crearElemento('input', [
            {
            type: 'id', 
            name: 'input-button1'
            },
            {
            type: 'class', 
            name: 'submittButton btnAgregarProducto'
            },
            {
            type: 'type', 
            name: 'submit'
            },
            {
            type: 'value', 
            name: 'Agregar Producto'
            }
        ]);

        divInputSubmitContainer.appendChild(inputBoton);
        secciones_head.appendChild(divInputSubmitContainer);
    }

    if(seccion.link && seccion.link !== 'none') {
        
        const headLink = crearElemento('a', [
            {type: 'class', name: `${clases.secciones__head_link}`},
            {type: 'href', name: `${seccion.link}`},
            // {type: 'target', name: `_blank`}
        ]);

        headLink.textContent = 'Ver todo →';
        secciones_head.appendChild(headLink);
    }

    return secciones_head;
}

function crearGridCards(articulos, __dir, seccion) {

    const gridCards = crearElemento('div', [{type: 'class', name: `${clases.main__secciones__gridCards}`}]);        

    articulos.map( (articulo)=> {

        const imgUrl = __dir + articulo.imagen;        
        const card = crearElemento('div', [{type: 'class', name: `${clases.secciones__gridCards__card}`}]);

        card.addEventListener('click', () => { handlerClick(articulo, seccion, __dir) });

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

function handlerClick(articulo, seccion, __dir) {
    
    const setArticulo = {...articulo, precio: articulo.precio};

    seccion.articulos.map( (articulo, key)=> {
        seccion.articulos[key] = {...seccion.articulos[key], precio: articulo.precio};
    });    

    const newHref = (__dir === './sources/assets/articles/') ? './sources/pages/InfoProduct.html' :  '../pages/InfoProduct.html';

    window.localStorage.setItem('seccion', JSON.stringify({...seccion, articulos: seccion.articulos}));
    window.localStorage.setItem('articulo', JSON.stringify(setArticulo));
    window.location.href = newHref;
}