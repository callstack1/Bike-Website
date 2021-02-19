export { Person };

class Person{
    constructor(name, img, text){
        this.name = name;
        this.img = img;
        this.text = text;
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
    static nextIndex = 0;
    static previousIndex = 4;
}