export { swipePerson };
import { Person } from './persons.js'
import { persons } from './persons_example.js';

function swipePerson(){
    const arrow = document.querySelectorAll(".arrow");
    const personsArray = createPersonsArray();
    // arrow.addEventListener("", swipe);
    arrow[0].addEventListener("click", changePerson);
    arrow[1].addEventListener("click", changePerson);
    
    function swipe(evt){
        return 0;
    }
    
    function changePerson(evt){
        const photo = document.querySelector("#photo");
        const txt = document.querySelector("#rec-txt");
        if (evt.target.id == "arrow-right"){
            Person.nextIndex++;
            let currentPerson = personsArray[Person.nextIndex];
            photo.style.background = `url(${currentPerson.getImg()})`;
            txt.textContent = currentPerson.getText();
        }
    }
}


function createPersonsArray(){
    let personsArray = [];
    for (const person in persons){
        const currentPerson = new Person(
            persons[person]["name"],
            persons[person]["picture"],
            persons[person]["txt"]
        );
        personsArray.push(currentPerson);
    }
    return personsArray;
}
