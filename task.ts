function mul(a:number,b:number){
    return a/b;
}
    console.log(mul(10,5));

//     let anotherList:Array<string> = ["1","2", "3","4"];
// let myObject:any = {}
// anotherList.forEach(element =>{
//     // console.log(element);
//     if(element == "3"){
//         console.log(element);
//         myObject.value = element;
//     }
// })
// console.log(myObject);


let weekDays:Array<string>=["mon","tue","wed","thu","fri","sat"];
let day:any={}
weekDays.forEach(week =>{
console.log(week);
    if(week== "thu"){
        console.log(week);
            day.name = week;
        }
    console.log(day);
})

for (var i = 0; i < weekDays.length; i++) { 
    if( weekDays[i] == "thu"){
        console.log(weekDays[i])
    }
}



var empDetails = function(ename,eid){
    // this.empName = ename;
    // this.empId = eid;
}
var emp1 = new empDetails('pradeep',1234);
var emp2 = new empDetails('hari',564);
    console.log(emp1)
    empDetails.prototype.sal = function(salary){
    this.salary = salary;
    }
    emp1.sal(10000)
    console.log(emp1)

    