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

let text_response = document.querySelector(".text_response")
let item_text_response = document.createElement('div')
const cats_button = document.querySelector(".button_cats");
const dogs_button = document.querySelector(".button_dogs");
const unicorns_button = document.querySelector(".button_unicorns");

function iWant(pet_type){
  let new_promise = new Promise((resolve, reject) => {
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
  new_promise.then(response => {
    text_response.innerHTML = "";
    response.map(item => text_response.append(`${item.name}: ${item.favoriteFood}/ `))
    }).catch(response => {
    text_response.innerHTML = "";
    text_response.append(response);
  })

  return new_promise
}

function handleClick(event) {
  if (event.target === cats_button) {
    iWant('cats');
  }
  if (event.target === dogs_button) {
    iWant('dogs');
  }
  if (event.target === unicorns_button) {
    iWant('unicorns')
  }
}

document.body.addEventListener('click', handleClick);

