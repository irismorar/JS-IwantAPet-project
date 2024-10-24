const cats_collection = [
  {
    name:'Lucitza',
    favoriteFood:'golden apple smoothie with roasted chicken'
  },
  {
    name:'Jokey',
    favoriteFood:'butter croissant with fish souce'
  },
  {
    name:'Kootzy',
    favoriteFood:'green jelly junk'
  }
]

const dogs_collection = [
  {
    name:'Moock',
    favoriteFood:'tartar rabbit with cabbage'
  },
  {
    name:'Pliky',
    favoriteFood:'purple-red sour sweets'
  },
  {
    name:'Dotty',
    favoriteFood:'lamb stew with blue cheese cream'
  }
]

//__________________________________________________________________

const initial_message = "Choose what kind of pets you want";
const sorry_message = "Sorry, all I have is cats and dogs";

let text_display_element = document.querySelector(".title");
text_display_element.append(initial_message);

const cats_button = document.querySelector(".button_cats");
const dogs_button = document.querySelector(".button_dogs");
const unicorns_button = document.querySelector(".button_unicorns");
const contentElement = document.querySelector(".contentElement")
const loaderElement = document.querySelector(".loader")
contentElement.innerHTML = "";

function iWant(pet_type){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pet_type === 'cats'){
        resolve(cats_collection)
      } else if (pet_type === 'dogs'){
        resolve(dogs_collection)
      } else {
        reject(sorry_message)
      }
    }, 3000);
  })
}

function handleClick(event) {
  if ((event.target === cats_button) || (event.target === cats_button.querySelector("span"))) {
    cats_button.disabled = true;
    dogs_button.disabled = true;
    unicorns_button.disabled = true;

    contentElement.innerHTML = '';
    contentElement.append(loaderElement);

    iWant('cats').then(cats => {
      cats_button.disabled = false;
      dogs_button.disabled = false;
      unicorns_button.disabled = false;

      const cats_table = createTable(cats, 'CAT');
      contentElement.innerHTML = '';
      contentElement.append(cats_table);
      // const catElements = cats.map(cat => {
      //   const divElement = document.createElement('div');
      //   divElement.append(cat.name, ': ',cat.favoriteFood);
      //   return divElement;
      // })
      // contentElement.append(...catElements);
    });
  }

  if (event.target === dogs_button || (event.target === dogs_button.querySelector("span"))) {
    cats_button.disabled = true;
    dogs_button.disabled = true;
    unicorns_button.disabled = true;

    contentElement.innerHTML = '';
    contentElement.append(loaderElement);

    iWant('dogs').then(dogs => {
      cats_button.disabled = false;
      dogs_button.disabled = false;
      unicorns_button.disabled = false;

      const dog_table = createTable(dogs, 'DOG');
      contentElement.innerHTML = '';
      contentElement.append(dog_table);
    });
  }

  if (event.target === unicorns_button || (event.target === unicorns_button.querySelector("span"))) {
    cats_button.disabled = true;
    dogs_button.disabled = true;
    unicorns_button.disabled = true;

    contentElement.innerHTML = '';
    contentElement.append(loaderElement);

    iWant('unicorns').catch(message => {
      cats_button.disabled = false;
      dogs_button.disabled = false;
      unicorns_button.disabled = false;
      
      contentElement.innerHTML = '';
      contentElement.append(message)
    })
  }
}

function createTable(animal_collection, animal_type) {
  let tableElement = document.createElement('table');
  let tableHeadElement = document.createElement('thead');
  let tableBodyElement = document.createElement('tbody');
  let tableRowHeadElement = document.createElement('tr');
  let tableHeaderNameElement = document.createElement('th');
  let tableHeaderFoodElement = document.createElement('th');
  
  tableHeaderNameElement.append(`${animal_type} NAME`);
  tableHeaderFoodElement.append('FAVORITE FOOD');
  tableRowHeadElement.append(tableHeaderNameElement, tableHeaderFoodElement);
  tableHeadElement.append(tableRowHeadElement);
  
  let animal_infos_element = animal_collection.map(animal => {
    const tableDivisionNameElement = document.createElement('td');
    tableDivisionNameElement.append(`${animal.name}`);
    const tableDivisionFoodElement = document.createElement('td');
    tableDivisionFoodElement.append(`${animal.favoriteFood}`);
    const tableRowBodyElement = document.createElement('tr');
    tableRowBodyElement.append(tableDivisionNameElement, tableDivisionFoodElement);
    return tableRowBodyElement
  });
  
  tableBodyElement.append(...animal_infos_element);
  tableElement.append(tableHeadElement, tableBodyElement);
  
  return tableElement
  
  // return `<table>
  //     <thead>
  //       <tr>
  //         <th>Cat name</th>
  //         <th>Favorite food</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       ${cats.map(cat => {
  //         return `
  //           <tr>
  //             <td>${cat.name}</td>
  //             <td>${cat.favoriteFood}</td>
  //           </tr>
  //         `
  //       }).join('')}
  //     </tbody>
  //   </table>
  // `;
}

document.body.addEventListener('click', handleClick);

