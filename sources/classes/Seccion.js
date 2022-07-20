export class Seccion 
{
    nombre;
    #articulos;
    link;
    static totalDeSecciones = 0;

    set articulos(valor) {
        if (valor instanceof Articulos) {
            this.#articulos = valor
        } else {
            throw new Error('Los articulos deben ser una instancia de la clase Articulo');
        }            
    }

    get articulos(){
        return this.#articulos;
    }

    constructor(nombre, articulos, link){

        // if (this.constructor == Seccion) {
        //     throw new Error('No es posible instanciar directamente de la clase padre Seccion');
        // }

        this.nombre = nombre ? nombre : null;
        this.#articulos = articulos ? articulos : null;
        this.link = link ? link : '#';
        Seccion.totalDeSecciones++;
    };

};