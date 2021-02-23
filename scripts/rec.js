export { swipePerson };
import { Person } from './persons.js'
import { persons } from './persons_example.js';

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

function swipePerson(){
    const arrow = document.querySelectorAll(".arrow");
    const personsArray = createPersonsArray();
    arrow[0].addEventListener("click", changePerson);
    arrow[1].addEventListener("click", changePerson);
    
    const photo = document.querySelector("#photo");
    const contentCtn = document.querySelector("#content-ctn"); // photo and txt ctn
    const nameCtn = document.querySelector("#name-ctn");
    
    
    function changePerson(evt){
        if (evt.target.id == "arrow-right"){
            var currentPerson = personsArray[Person.nextPerson("next")];
        } else {
            var currentPerson = personsArray[Person.nextPerson("previous")];
        }
        // photo
        photo.style.opacity = "0%";
        photo.src = currentPerson.getImg();
        let [nextText, nextName] = changeDetails();
        var start = null;
        requestAnimationFrame(detailsAnimation);
        
        function detailsAnimation(time){
            if (start == null){
                start = time;
            }
            var progress = time-start;
            photo.style.opacity = `${parseInt(photo.style.opacity)+progress*0.2}%`;
            nextText.style.opacity = `${parseInt(nextText.style.opacity)+progress*0.2}%`;
            nextName.style.opacity = `${parseInt(nextName.style.opacity)+progress*0.2}%`;
            if (parseInt(photo.style.opacity) <= 1){
                requestAnimationFrame(detailsAnimation);
            }
        }

        function changeDetails(){
            // rec text
            const nextText = document.createElement("p");
            nextText.textContent = currentPerson.getText();
            nextText.style.opacity = "0%";
            if (window.innerWidth >= 768){
                nextText.style.fontSize = "3rem";
            }
            nextText.id = "rec-txt";
            let txt = document.querySelector("#rec-txt");
            contentCtn.removeChild(txt);
            contentCtn.appendChild(nextText);
            // person name
            const nextName = document.createElement("p");
            nextName.textContent = currentPerson.getName();
            nextName.style.opacity = "0%";
            nextName.id = "person-name";
            let name = document.querySelector("#person-name");
            nameCtn.removeChild(name);
            nameCtn.appendChild(nextName);
            return [nextText, nextName];
        };
    }
}

