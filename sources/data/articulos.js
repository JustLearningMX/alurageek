import { Articulo } from "../classes/Articulo.js";

export const crearArticulos = (img, seccion)=> {    

    const articulos = [];

    for (let i = 0; i < 6; i++) {
        const articulo = new Articulo (
            'Producto XYZ', 
            '60', 
            `Lorem ipsum dolor sit amet consectetur, adipisicing elit. \n 
            Incidunt ipsam perspiciatis odio dolores nemo rem illum itaque \n
            porro delectus enim temporibus, inventore, quis libero reiciendis\n
             illo soluta deleniti asperiores! Quod. Lorem ipsum dolor sit amet \n
             consectetur, adipisicing elit. Incidunt ipsam perspiciatis odio \n
             dolores nemo rem illum itaque porro delectus enim temporibus, \n
             inventore, quis libero reiciendis illo soluta deleniti asperiores! Quod.)`,
             `${img}${i+1}.png`,
             `${seccion}`
        ); //../assets/articles/
        
        articulos.push(articulo);
    }

    return articulos;
}