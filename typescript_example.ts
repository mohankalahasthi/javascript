// console.log('hello typescript');

// let a:String = "10";

// class MyFirstClass {
//     b : Number = 234;
//     constructor(){

//     }
//     getNumber(){
//         console.log(this.b);
//     }
 
// }

let a:number = 10;
let b:string = "hari";
console.log(typeof(a));
console.log(typeof(b));


function c(){
    let a = "something";
    console.log(a);
}
c();
console.log(a);

let list:Array<string> = ["a","b", "c","d"];

list.forEach(function(element){
    console.log(element)
})

let anotherList:Array<string> = ["1","2", "3","4"];
let myObject:any = {}
anotherList.forEach(element =>{
    // console.log(element);
    if(element == "3"){
        console.log(element);
        myObject.value = element;
    }
})
console.log(myObject);



function multiply(number1:number, number2:number):any{
    return number1*number2;
}

console.log(multiply(10,20));

function dummy():void{
    console.log("this is a non returnable fucntion")
}

// multiply = dummy;

console.log(multiply(20, 30));


class Person{
    name:String;
    username: String;
    age: Number;
    protected Role: String
    constructor(name:string, username:string){
        this.name = name;
        this.username = username
    }
    setAge(age:number){
        this.age = age;
        console.log(this.age);
    }
    private setRole(role){
        console.log(role);
    }
}

var person = new Person("Hari", "Hari1234");
var employee = new Person("rajesh", "raju123")
console.log(person.name, person.username);
console.log(employee.name);
person.setAge(27);
// person.setRole("employee"); "it wont be acceses out side the class"

let variable = 10000;
console.log(variable);


variable = 10;
console.log(variable)

class Student extends Person{
    // name = "Kumar";
}

var student = new Student("suresh", "poorna12324");
console.log(student.name);
