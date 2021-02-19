import { banner } from './createBanner.js';
import { menu } from './menu.js';

function menuOffWhenScrolling(){
    window.addEventListener("scroll", () => {
        if (menu.status == "on"){
            menu.toggle();
        }
    })
}

banner();
menu.create();
menuOffWhenScrolling();