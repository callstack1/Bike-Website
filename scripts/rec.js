export { swipePerson };
import { Person } from './persons.js'
import { persons } from './persons_example.js';

function swipePerson(){
    const arrow = document.querySelectorAll(".arrow");
    const personsArray = createPersonsArray();
    arrow[0].addEventListener("click", changePerson);
    arrow[1].addEventListener("click", changePerson);
    
    function changePerson(evt){
        const photo = document.querySelector("#photo");
        const rec = document.querySelector("#rec");
        if (evt.target.id == "arrow-right"){
            var currentPerson = personsArray[Person.nextPerson("next")];
        } else {
            var currentPerson = personsArray[Person.nextPerson("previous")];
        }
        photo.src = currentPerson.getImg();
        const nextText = document.createElement("p");
        nextText.textContent = currentPerson.getText();
        nextText.id = "rec-txt";
        let txt = document.querySelector("#rec-txt");
        rec.removeChild(txt);
        rec.appendChild(nextText);
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
