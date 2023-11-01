const data = require('./data');

function entryCalculator(entrants) {
  if (!entrants){
    return 0
  }

  let totalPrice = 0;

  if (entrants.Adult) {
    totalPrice += entrants.Adult * data.prices.Adult;
  }
  if (entrants.Child) {
    totalPrice += entrants.Child * data.prices.Child;
  }
  if (entrants.Senior) {
    totalPrice += entrants.Senior * data.prices.Senior;
  }

  return totalPrice;
}

function convertTo12HourFormat(hours) {
  const period = hours < 12 ? 'am' : 'pm';
  const displayHours = hours === 0 || hours === 12 ? 12 : hours % 12;
  return `${displayHours}${period}`;
}

function schedule(dayName) {
  const humanReadableHours = {};

  if (!dayName) {
    for (const day in data.hours) {
      const { open, close } = data.hours[day];
      humanReadableHours[day] =
        open === 0 && close === 0
          ? 'CLOSED'
          : `Open from ${convertTo12HourFormat(open)} until ${convertTo12HourFormat(close)}`;
    }
  } else {
    const { open, close } = data.hours[dayName];
    humanReadableHours[dayName] =
      open === 0 && close === 0
        ? 'CLOSED'
        : `Open from ${convertTo12HourFormat(open)} until ${convertTo12HourFormat(close)}`;
  }

  return humanReadableHours;
}



function animalCount(species) {
  const animals = data.animals;
  
  if (!species) {
    const animalCount = animals.reduce((count, animal) => {
      count[animal.name] = animal.residents.length;
      return count;
    }, {});
    
    return animalCount;
  } else {
    const specificAnimal = animals.find(animal => animal.name === species);
    if (specificAnimal) {
      return specificAnimal.residents.length;
    } else {
      return 0; 
    }
  }
}

function animalMap(options) {
  const animals = data.animals;
  const { includeNames = false, sex } = options || {};
  
  const animalsByLocation = animals.reduce((acc, animal) => {
    const { name, location, residents } = animal;

    const filteredResidents = sex
      ? residents.filter(resident => resident.sex === sex)
      : residents;

    if (!acc[location]) {
      acc[location] = [];
    }

    if (includeNames) {
      const animalResidents = {};
      animalResidents[name] = filteredResidents.map(resident => resident.name);
      acc[location].push(animalResidents);
    } else {
      acc[location].push(name);
    }

    return acc;
  }, {});

    if (includeNames) {
      const finalResult = Object.keys(animalsByLocation).reduce((result, location) => {
        const animalsAtLocation = animalsByLocation[location];
        const formattedData = animalsAtLocation.map(animal => {
          const [animalName] = Object.keys(animal);
          const residents = animal[animalName];
          const data = { [animalName]: residents };
          return data;
        });
  
        result[location] = formattedData;
        return result;
      }, {});
  
      return finalResult;
    }
  
    return animalsByLocation;

}

function animalPopularity(rating) {
  const animals = data.animals;

  const animalsByPopularity = animals.reduce((acc, animal) => {
    const { name, popularity } = animal;

    if (!acc[popularity]) {
      acc[popularity] = [];
    }

    acc[popularity].push(name);
    return acc;
  }, {});

  if (rating !== undefined) {
    return animalsByPopularity[rating] || [];
  }
  
  return animalsByPopularity;
}

function animalsByIds(ids) {
  const animals = data.animals;

  if (!ids) {
    return [];
  }
  const idsToFind = Array.isArray(ids) ? ids : [ids];

  return animals.filter(animal => idsToFind.includes(animal.id));
}

function animalByName(animalName) {
  const animals = data.animals;
  
  if (!animalName) {
    return {}; 
  }

  const foundAnimal = animals.find(animal =>
    animal.residents.some(resident => resident.name === animalName)
  );

  if (foundAnimal) {
    const { name: species, residents } = foundAnimal;
    const { name, sex, age } = residents.find(resident => resident.name === animalName);

    const animalInfo = {
      name,
      sex,
      age,
      species
    };

    return animalInfo;
  } else {
    return {}; 
  }
}

function employeesByIds(ids) {

  if (!ids) {
    return [];
  }
  const idsToFind = Array.isArray(ids) ? ids : [ids];

  return data.employees.filter(employee => idsToFind.includes(employee.id));

}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const employeeByFirstName = data.employees.find(emp => emp.firstName === employeeName);
  if (employeeByFirstName) {
    return { ...employeeByFirstName };
  }

  const employeeByLastName = data.employees.find(emp => emp.lastName === employeeName);
  if (employeeByLastName) {
    return { ...employeeByLastName };
  }

  return {};
}

function managersForEmployee(idOrName) {
  if (!idOrName) {
    return {};
  }

  var employee = data.employees.find(emp => emp.id === idOrName);
  if (!employee) {
    employee = employeeByName(idOrName);
    if (!employee) {
      return {};
    }
  }

  const managerNames = employee.managers.map(managerId => {
    const manager = data.employees.find(emp => emp.id === managerId);
    if (manager) {
      return `${manager.firstName} ${manager.lastName}`;
    }
    return null;
  });

  return {
    ...employee,
    managers: managerNames.filter(Boolean),
  };
}

function employeeCoverage(idOrName) {
  if (idOrName) {

    var employee = data.employees.find(emp => emp.id === idOrName);
    if (!employee) {
      employee = employeeByName(idOrName);
      if (!employee) {
        return {};
      }
    }
  
    const animalsCared = employee.responsibleFor.map(animalId => {
      const animal = data.animals.find(animal => animal.id === animalId);
      return animal ? animal.name : null;
    });
    const employeeName = `${employee.firstName} ${employee.lastName}`;
    return {
      [employeeName]: animalsCared.filter(Boolean),
    };
}
else
{
  const employeesWithAnimals = {};

  data.employees.forEach(employee => {
    const animalsCared = employee.responsibleFor.map(animalId => {
      const animal = data.animals.find(animal => animal.id === animalId);
      return animal ? animal.name : null;
    });

    const employeeName = `${employee.firstName} ${employee.lastName}`;
    employeesWithAnimals[employeeName] = animalsCared.filter(Boolean);
  });

  return employeesWithAnimals;
}




}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
