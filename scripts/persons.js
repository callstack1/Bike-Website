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
    static currentIndex = 0;
    static nextPerson = function(type){
        if (type == "next"){
            this.currentIndex == 4 ? 
            this.currentIndex = 0 : 
            this.currentIndex++;
        } else {
            this.currentIndex == 0 ?
            this.currentIndex = 4 :
            this.currentIndex--;
        }
        return this.currentIndex;
    }
}