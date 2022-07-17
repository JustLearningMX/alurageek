import { crearElemento } from "../utils/crearNodos.js";
import { loginInputs } from '../data/loginInputs.js';
import { crearInputs } from "../components/Input.js";

const loginForm = document.querySelector('.login__form');

const clases = {
    divInputContainer: 'form__inputContainer',
    inputData: 'form__inputContainer-data form__inputContainer-login',
    labelTextForInput: 'form__inputContainer-text',    
    spanErrorMsg: 'form__inputContainer-error',
};

crearFooterContacto();

function crearFooterContacto() {

    loginInputs.map(       
        (inputItem)=>{
            const input = crearInputs(clases, inputItem);
            loginForm.appendChild(input);
        }        
    );

    const divInputSubmitContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer} btnLoginContainer`}]);
    const inputBoton = crearElemento('input', [
        {
          type: 'id', 
          name: 'input-buttonLogin'
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
          name: 'Entrar'
        }
      ]);

    divInputSubmitContainer.appendChild(inputBoton);
    loginForm.appendChild(divInputSubmitContainer);

}