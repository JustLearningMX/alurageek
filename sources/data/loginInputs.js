export const loginInputs = [
    {
        type: 'text',
        name: 'name',
        placeholder: '\xa0',
        value: null,
        required: true,
        autofocus: true,
        label: 'Nombre',
        errorMsg: 'Este campo no puede ir vacío',
        autocomplete: true,
        readOnly: true
    },
    {
        type: 'password',
        name: 'password',
        placeholder: '\xa0',
        value: null,
        required: true,
        autofocus: false,
        label: 'Password',
        errorMsg: 'Este campo no puede ir vacío',
        autocomplete: true,
    },
];