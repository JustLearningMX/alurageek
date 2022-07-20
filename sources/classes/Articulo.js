export class Articulo 
{
    id
    nombre;
    #precio;
    descripcion;
    imagen;
    seccion;
    link;
    static totalDeArticulos = 0;

    set precio(valor) {
        this.#precio = valor;
    }

    get precio(){
        return this.#precio;
    }

    constructor(nombre, precio, descripcion, imagen, seccion, link){

        // if(this.constructor == Articulo){
        //     throw new Error('No es posible instanciar directamente de la clase padre Articulo');
        // }

        this.id = uuid.v4();
        this.nombre = nombre ? nombre : null;
        this.#precio = precio ? precio : null;
        this.descripcion = descripcion ? descripcion : null;
        this.imagen = imagen ? imagen : null;
        this.seccion = seccion ? seccion : null;
        this.link = link ? link : '#';
        Articulo.totalDeArticulos++;
    }

}