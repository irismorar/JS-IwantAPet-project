# JS-IwantAPet-project
Build a small web application with 3 responsive buttons describing the type of pet you want to adopt. Use promises, states and a pretty UI.

Requirements:
* the UI has three buttons labeled "I want cats", "I want dogs" and "I want unicorns"
* the UI has an initial message that says "choose what kind of pets you want"

* there's an "iWant" function that returns a Promise
* if the "iWant" function is called with the "cats" string then the Promise resolves in 3 seconds with an array of cats; each cat has a "name" and a "favoriteFood"
* if the "iWant" function is called with the "dogs" string then the Promise resolves in 3 seconds with an array of dogs; each dog has a "name" and a "favoriteFood"
* if the "iWant" function is called with any other argument(s) then the Promise rejects with the following message: "sorry, all I have is cats and dogs :(" (it's up to you to decide whether the Promise rejects instantly or it rejects in 3 seconds, but this is useful to think about)

* when the user presses the "I want cats" button, the UI enters a loading state until the Promise resolves with the array of cats; once that happens, the cats are displayed in a table with two columns - "Cat name" and "Favorite food"
* when the user presses the "I want dogs" button, the UI enters a loading state until the Promise resolves with the array of dogs; once that happens, the dogs are displayed in a table with two columns - "Dog name" and "Favorite food"
* when the user presses the "I want unicorns" button, the UI enters a loading state until the Promise rejects; once that happens, the reject message is displayed
* while the UI is in the loading state the following loading message is displayed: "please wait..."

* the initial message, the loading message, the reject message and the table should never be displayed at the same time, each of them should only be displayed when appropriate; for example, if you are displaying the loading message then you should not display a table or the initial message, and so on.
