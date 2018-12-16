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

function add(a:number, b:any){
    return a+b;
}

console.log(add(32,"23"));

function getObject(obj:any){
    console.log(obj)
    return obj.id;
}
let myObj = {
    id:1, 
    name:"Hari"
}
console.log(getObject(myObj));


