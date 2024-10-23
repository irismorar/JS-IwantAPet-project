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
const loading_message = "Please wait...";

let text_display_element = document.querySelector(".title");
text_display_element.append(initial_message);

let contentElement = document.querySelector(".contentElement")
const cats_button = document.querySelector(".button_cats");
const dogs_button = document.querySelector(".button_dogs");
const unicorns_button = document.querySelector(".button_unicorns");

function iWant(pet_type){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pet_type === 'cats'){
        resolve(cats_collection)
      } else if (pet_type === 'dogs'){
        resolve(dogs_collection)
      } else {
        reject("Sorry, all I have is cats and dogs")
      }
    }, 3000);
  })
}

function handleClick(event) {
  
  if (event.target === cats_button) {
    contentElement.innerHTML = '';
    contentElement.append(loading_message);

    iWant('cats').then(cats => {
      contentElement.innerHTML = createCatsTable(cats);
      // const catElements = cats.map(cat => {
      //   const divElement = document.createElement('div');
      //   divElement.append(cat.name, ': ',cat.favoriteFood);
      //   return divElement;
      // })
      // contentElement.append(...catElements);
    });
  }

  if (event.target === dogs_button) {
    contentElement.innerHTML = '';
    contentElement.append(loading_message);

    iWant('dogs').then(dogs => {
      console.log(dogs);
    });
  }

  if (event.target === unicorns_button) {
    contentElement.innerHTML = '';
    contentElement.append(loading_message);

    iWant('unicorns').catch(message => {
      console.log(message);
    })
  }
}

function createCatsTable(cats) {
  return `<table>
      <thead>
        <tr>
          <th>Cat name</th>
          <th>Favorite food</th>
        </tr>
      </thead>
      <tbody>
        ${cats.map(cat => {
          return `
            <tr>
              <td>${cat.name}</td>
              <td>${cat.favoriteFood}</td>
            </tr>
          `
        }).join('')}
      </tbody>
    </table>
  `;
}

document.body.addEventListener('click', handleClick);

