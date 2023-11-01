
  // Definición de una función llamada findOne que simula una búsqueda asincrónica en una lista de usuarios
  //La función findOne toma tres argumentos: list (la lista de usuarios), un objeto con { key, value } que se usará como criterio de búsqueda y un objeto con dos funciones callback (onSuccess y onError).
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  // Simula un retraso de 2 segundos antes de ejecutar el siguiente código
  setTimeout(() => {
    // Busca un elemento en la lista que cumpla con el criterio proporcionado
    const element = list.find(element => element[key] === value);
    // Si se encuentra el elemento, llama a la función callback onSuccess con el elemento encontrado
    // de lo contrario, llama a la función callback onError con un mensaje de error
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000); // Retraso de 2000 milisegundos (2 segundos)
};

// Función que se ejecutará si la búsqueda tiene éxito
const onSuccess = ({ name }) => console.log(`user: ${name}`);
// Función que se ejecutará si la búsqueda no encuentra el elemento
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

// Imprime un mensaje indicando el inicio de la búsqueda exitosa
console.log('findOne success');
// Llama a la función findOne para buscar al usuario con nombre 'Carlos' en la lista de usuarios
// Proporciona las funciones callback onSuccess y onError para manejar los resultados
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

// Imprime un mensaje indicando el inicio de la búsqueda fallida
console.log('findOne error');
// Llama a la función findOne para buscar al usuario con nombre 'Fermin' en la lista de usuarios
// Proporciona las funciones callback onSuccess y onError para manejar los resultados
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
  findOne success //Se imprime 'findOne success' y se está ejecutando la función findOne la cual tiene un retraso de 2s 
  findOne error //Se imprime 'findOne error' y se está ejecutando la función findOne la cual tiene un retraso de 2s 
    //wait 2 seconds //2s depués acaban las ejecuciones de las funciones
  user: Carlos //Fin de la primera ejecucion de findOne y ejecución del callback onSuccess
  ERROR: Element Not Found //Fin de la segunda ejecucion de findOne y ejecución del callback onError
*/