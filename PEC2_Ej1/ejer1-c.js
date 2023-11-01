// Función que utiliza async/await para simular la búsqueda asincrónica
const findOneAsync = async (list, { key, value }) => {
    // Se devuelve una promesa que se resolverá después de 2 segundos (simulando el retraso)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Se busca el elemento en la lista que cumpla con el criterio proporcionado
            const element = list.find(element => element[key] === value);
            // Si se encuentra el elemento, se resuelve la promesa con el elemento encontrado
            // de lo contrario, se rechaza la promesa con un mensaje de error
            element ? resolve(element) : reject('ERROR: Element Not Found');
        }, 2000); // Retraso de 2000 milisegundos (2 segundos)
    });
};

// Funciones de manejo de éxito y error
const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

// Lista de usuarios
const users = [
    {
        name: 'Carlos',
        rol: 'Teacher'
    },
    {
        name: 'Ana',
        rol: 'Boss'
    }
];

// Función asincrónica que gestiona la lógica de búsqueda con async/await
const searchUser = async (searchQuery) => {
    try {
        const result = await findOneAsync(users, searchQuery);
        onSuccess(result); // Llama a la función de éxito con el resultado
    } catch (error) {
        onError({ msg: error }); // Llama a la función de error con el mensaje de error
    }
};

// Lógica principal usando async/await
(async () => {
    console.log('findOne success');
    await searchUser({ key: 'name', value: 'Carlos' });

    console.log('findOne error');
    await searchUser({ key: 'name', value: 'Fermin' });
})();
  
/*
    findOne success
    Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
    user: Carlos
    findOne error
    ERROR: Element Not Found
*/