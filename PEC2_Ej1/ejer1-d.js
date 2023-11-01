// Función que simula la búsqueda asincrónica
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    return new Promise((resolve, reject) => {
        // Simula un retraso de 2 segundos antes de ejecutar el código
        setTimeout(() => {
        // Busca un elemento en la lista que cumpla con el criterio proporcionado
        const element = list.find(element => element[key] === value);
        // Si se encuentra el elemento, ejecuta onSuccess; de lo contrario, ejecuta onError
        element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
        resolve(); // Resuelve la promesa después de ejecutar onSuccess o onError
        }, 2000);
    });
};

// Función que imprime el nombre del usuario en caso de éxito
const onSuccess = ({ name }) => console.log(`user: ${name}`);

// Función que imprime un mensaje de error en caso de no encontrar el elemento
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
  
  // Función async que ejecuta ambas búsquedas findOne en paralelo
const executeFindOnes = async () => {
    console.log('findOne success'); // Imprime un mensaje indicando la primera búsqueda
    const promise1 = findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }); // Realiza la primera búsqueda

    console.log('findOne error'); // Imprime un mensaje indicando la segunda búsqueda
    const promise2 = findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }); // Realiza la segunda búsqueda

    // Espera a que ambas promesas se resuelvan antes de continuar
    await Promise.all([promise1, promise2]);
};
  
// Ejecución de las búsquedas findOne en paralelo
executeFindOnes();

/*
    findOne success
    findOne error
    Promise {<pending>}
    user: Carlos
    ERROR: Element Not Found
*/