import { Seccion } from "../classes/Seccion.js";
import { crearArticulos } from "./articulos.js";

export const secciones = [];

export const crearSecciones = ()=> {
    
    const starwars = crearArticulos(`sw_`, 'Star Wars');
    const consolas = crearArticulos(`cn_`, 'Consolas');
    const diversos = crearArticulos(`dv_`, 'Diversos');

    const seccion1 = new Seccion('Star Wars', starwars, './sources/pages/allProducts.html');
    const seccion2 = new Seccion('Consolas', consolas, './sources/pages/allProducts.html');
    const seccion3 = new Seccion('Diversos', diversos, './sources/pages/allProducts.html');
    

    secciones.push(seccion1);
    secciones.push(seccion2);
    secciones.push(seccion3);
};