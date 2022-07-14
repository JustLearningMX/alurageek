import { crearElemento } from '../utils/crearNodos.js';

export const crearInputs = (clases, input)=>{

    const divInputContainer = crearElemento('div', [{type: 'class', name: `${clases.divInputContainer}`}]);
    const inputItem = crearElemento('input', [
        {type: 'class', name: `${clases.inputData}`},
        {type: `type`, name: `${input.type}`},
        {type: `name`, name: `${input.name}`},
    ]);

    if(input.placeholder)
        inputItem.placeholder = input.placeholder;

    if(input.value)
        inputItem.value = input.value;
    
    if(input.autocomplete) 
        inputItem.autocomplete = 'false';
    

    if(input.required)
        inputItem.required = true;
    
    if(input.autofocus) 
        inputItem.autofocus = true;    

    if(input.readOnly) {
        inputItem.readOnly = true;  
        inputItem.onclick = ()=>{ inputItem.removeAttribute('readOnly');}
    }

    const spanTextInput = crearElemento('span', [{type: 'class', name: `${clases.labelTextForInput}`}]);
    spanTextInput.textContent = input.label;

    const spanErrorMsg = crearElemento('span', [{type: 'class', name: `${clases.spanErrorMsg}`}]);
    spanErrorMsg.textContent = input.errorMsg;

    divInputContainer.appendChild(inputItem);
    divInputContainer.appendChild(spanTextInput);
    divInputContainer.appendChild(spanErrorMsg);

    return divInputContainer;
};