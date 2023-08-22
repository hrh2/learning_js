class Humans{
   name;
   discription;
   arms;
}


const person1=new Humans()

person1.name="John"
person1.discription="have 1dog and 2cats"
person1.arms="2"

console.log(person1.discription)


const person2= new Humans()
person2.name="passy"
person2.discription="have  3dogs and one cat"
person2.arms="3"

console.log(person2.discription)


// with constructor function

class Dog{
    dogName;
    age;
    color;
    constructor(name, age, color){
        this.dogName=name;
        this.age=age;
        this.color=color;
    }
}


const dog1=new Dog("max",4,"black");

console.log(dog1)


//class with behavior 
class Cat{
    name;
    age;
    sound;
    constructor(name, age, sound){
        this.name=name;
        this.age=age;
        this.sound=sound;
    }
    greeting(){
        console.log(`hey it's ${this.name}`)
    }
    
}
 
const cat= new Cat(`tom`,2,`miau`)
cat.greeting()
console.log (cat)
