import { crearElemento } from "../utils/crearNodos.js";
import { addProductInputs } from "../data/addProductInputs.js";
import { crearInputs } from "../components/Input.js";

const agregarProducto__form = document.querySelector('.agregarProducto__form');

const clases = {
    divInputContainer: 'form__inputContainer',
    inputData: 'form__inputContainer-data',
    labelTextForInput: 'form__inputContainer-text',    
    spanErrorMsg: 'form__inputContainer-error',
};

crearFormAgregarProducto();

function crearFormAgregarProducto() {

    addProductInputs.map(       
        (inputItem)=>{
            const input = crearInputs(clases, inputItem); 
            agregarProducto__form.appendChild(input);
        }
    );

    const divTxtAreaContainer = crearElemento('div', [{type: 'class', name: `divTextAreaContainer`}]);
    const txtareaMensaje = crearElemento('textarea', [
        {type: 'class', name: `textArea`},
        {type: `name`, name: `mensaje`},
        {type: `rows`, name: `5`},
        {type: `cols`, name: `28`},
        {type: `placeholder`, name: `Descripción del producto`},
    ]);

    divTxtAreaContainer.appendChild(txtareaMensaje);
    agregarProducto__form.appendChild(divTxtAreaContainer);

    const divInputSubmitContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer}`}]);
    const inputBoton = crearElemento('input', [
        {
          type: 'id', 
          name: 'input-button'
        },
        {
          type: 'class', 
          name: 'submittButton btnAddingProduct'
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
    agregarProducto__form.appendChild(divInputSubmitContainer);

}