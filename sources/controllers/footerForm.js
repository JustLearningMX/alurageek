import { crearElemento } from "../utils/crearNodos.js";
import { footerInputs } from "../data/footerFormInputs.js";
import { crearInputs } from "../components/Input.js";

const footerFormContacto = document.querySelector('.footer__contacto-form');

const clases = {
    divInputContainer: 'form__inputContainer',
    inputData: 'form__inputContainer-data',
    labelTextForInput: 'form__inputContainer-text',    
    spanErrorMsg: 'form__inputContainer-error',
};

crearFooterContacto();

function crearFooterContacto() {

    footerInputs.map(       
        (inputItem)=>{
            const input = crearInputs(clases, inputItem); 
            footerFormContacto.appendChild(input);
        }
    );

    const divTxtAreaContainer = crearElemento('div', [{type: 'class', name: `divTextAreaContainer`}]);
    const txtareaMensaje = crearElemento('textarea', [
        {type: 'class', name: `textArea`},
        {type: `name`, name: `mensaje`},
        {type: `rows`, name: `5`},
        {type: `cols`, name: `28`},
        {type: `placeholder`, name: `Escribe tu mensaje`},
    ]);

    divTxtAreaContainer.appendChild(txtareaMensaje);
    footerFormContacto.appendChild(divTxtAreaContainer);

    const divInputSubmitContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer}`}]);
    const inputBoton = crearElemento('input', [
        {
          type: 'id', 
          name: 'input-button'
        },
        {
          type: 'class', 
          name: 'submittButton'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Enviar mensaje'
        }
      ]);

    divInputSubmitContainer.appendChild(inputBoton);
    footerFormContacto.appendChild(divInputSubmitContainer);

}