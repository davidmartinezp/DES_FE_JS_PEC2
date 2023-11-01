
const findOne = (list, { key, value }) => {
    // Se devuelve una nueva promesa que resuelve o rechaza según el resultado de la búsqueda
    return new Promise((resolve, reject) => {
      // Simula un retraso de 2 segundos antes de ejecutar el siguiente código
      setTimeout(() => {
        // Busca un elemento en la lista que cumpla con el criterio proporcionado
        const element = list.find(element => element[key] === value);
        // Si se encuentra el elemento, resuelve la promesa con el elemento encontrado
        // de lo contrario, rechaza la promesa con un mensaje de error
        element ? resolve(element) : reject('ERROR: Element Not Found');
      }, 2000); // Retraso de 2000 milisegundos (2 segundos)
    });
};
  
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

// Imprime un mensaje indicando el inicio de la búsqueda exitosa
console.log('findOne success');

// Uso de la promesa devuelta por la función findOne para manejar el éxito o el error
findOne(users, { key: 'name', value: 'Carlos' })
    .then(element => {
        // En caso de éxito, imprime el nombre del usuario
        console.log(`user: ${element.name}`);
    })
    .catch(error => {
        // En caso de error, imprime el mensaje de error
        console.log(error);
});

// Imprime un mensaje indicando el inicio de la búsqueda fallida
console.log('findOne error');

// Uso de la promesa devuelta por la función findOne para manejar el éxito o el error
findOne(users, { key: 'name', value: 'Fermin' })
    .then(element => {
        // En caso de éxito, imprime el nombre del usuario (que no se alcanzará en este escenario)
        console.log(`user: ${element.name}`);
    })
    .catch(error => {
        // En caso de error, imprime el mensaje de error
        console.log(error);
});
  
/*
    findOne success
    findOne error
    Promise {<pending>}
    user: Carlos
    ERROR: Element Not Found
*/