export {menu};

let menu = {
    status: "off",
    banner: document.querySelector("#banner"),
    square: document.createElement("div"),
    contentCtn: document.createElement("div"),
    startAnimation: null,
    contents: {
        "Inicio": "index.html",
        "Produtos": "produtos.html",
        "Recomendações": "index.html#rec",
        "Sobre": "index.html#sobre",
        "Contato": "index.html#footer"
    },
    create: function(){
        menu.tag = document.querySelector("#menu");
        menu.bars = document.querySelector("#menu").children;
        this.tag.addEventListener("click", this.toggle);
        this.createContent();
    },
    toggle: function(){
        if (menu.status == "off"){
            menu.bars[1].style.display = "none";
            menu.bars[0].classList.add("menu-bar-top");
            menu.bars[2].classList.add("menu-bar-bottom");
            menu.show();
        } else {
            menu.bars[1].style.display = "block";
            menu.bars[0].classList.remove("menu-bar-top");
            menu.bars[2].classList.remove("menu-bar-bottom");
            menu.hide();
        }
    },
    show: function(){
        menu.status = "on";
        menu.square.className = "menu-square";
        menu.contentCtn.className = "content-ctn";
        menu.square.style.top = `${menu.yPos()+0.12*window.innerHeight}px`;
        menu.square.style.left = "-50%";
        document.body.appendChild(menu.square);
        menu.square.appendChild(menu.contentCtn);
        for (const link in menu.contents){
            menu.contentCtn.appendChild(menu.contents[link]);
        };
        requestAnimationFrame(menu.animation);
    },
    hide: function(){
        menu.status = "off";
        document.body.removeChild(menu.square);
    },
    yPos: function(){
        return window.pageYOffset;
    },
    createContent: function(){
        for (const key in menu.contents){
            const link = document.createElement("a");
            link.className = "content";
            link.textContent = key;
            link.href = `${menu.contents[key]}`;
            menu.contents[key] = link;
        }
    },
    animation: function(time){
        if (!menu.startAnimation){
            menu.startAnimation = time;
        }
        let currentTime = (time-menu.startAnimation)*0.08;
        menu.square.style.left = `${parseInt(menu.square.style.left)+currentTime}%`;
        if (parseInt(menu.square.style.left) < 0){
            requestAnimationFrame(menu.animation);
        } else {
            menu.square.style.left = "0%";
            menu.startAnimation = null;
        }
    }
};