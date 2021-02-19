export { person };

class person{
    constructor(name, text, img){
        this.name = name;
        this.text = text;
        this.img = img;
    }

    getName = function(){
        return this.name;
    }
    getText = function(){
        return this.text;
    }
    getImg = function(){
        return this.img;
    }
}