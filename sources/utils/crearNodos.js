/**
 * Función que crea nodos
 */

//Recibe el nombre del elemento HTML a crear y un objeto con sus atributos
export const crearElemento = (elemento, atributos, required, autofocus) => {
    const nodo = document.createElement(elemento);

    if(atributos){
        atributos.map((atributo)=>{
            nodo.setAttribute(atributo.type, atributo.name);
        });
    };

    if(required){
        nodo.required = true;
    };

    if(autofocus){
        nodo.autofocus = true;
    }

    return nodo;
};