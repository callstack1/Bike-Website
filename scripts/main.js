import { banner } from './createBanner.js';
import { menu } from './menu.js';
import { swipePerson } from './rec.js';

function menuOffWhenScrolling(){
    window.addEventListener("scroll", () => {
        if (menu.status == "on"){
            menu.toggle();
        }
    })
}

if (window.innerWidth < 768){ // just work for phones
    banner();
    menu.create();
    menuOffWhenScrolling();
}
swipePerson();