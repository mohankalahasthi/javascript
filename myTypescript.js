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
var a = 10;
var b = "hari";
console.log(typeof (a));
console.log(typeof (b));
function c() {
    var a = "something";
    console.log(a);
}
c();
console.log(a);
var list = ["a", "b", "c", "d"];
list.forEach(function (element) {
    console.log(element);
});
var anotherList = ["1", "2", "3", "4"];
var myObject = {};
anotherList.forEach(function (element) {
    // console.log(element);
    if (element == "3") {
        console.log(element);
        myObject.value = element;
    }
});
console.log(myObject);
function add(a, b) {
    return a + b;
}
console.log(add(32, "23"));
function getObject(obj) {
    console.log(obj);
    return obj.id;
}
var myObj = {
    id: 1,
    name: "Hari"
};
console.log(getObject(myObj));
