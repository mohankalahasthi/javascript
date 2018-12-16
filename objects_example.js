// first
var obj = {
	name : "suresh",
	fn : function (){
		console.log("hey... this is function in object");
	}
}
console.log(obj.name);
console.log(obj.fn);

// second
 var Details = function(name,age){
 	this.name = name;
 	this.age = age;
 	console.log(this.name, this.age);
 }

 var person1 = new Details("suresh", 20);
 var person2 = new Details("ramesh", 30);


console.log(person1)

console.log(person2)


//third

var vehicle = {
	"name" : "audi",
	"type" : "sedan"
}

var car = Object.create(vehicle);

car.name = "nissan";
car.type = "sedan";
car.model = "micra";

console.log(car);
console.log(vehicle);

// closures


function movie(name){
	this.name = name;

	return function(people){
		this.people = people
		console.log("hey...! Im going to" + " " + this.name + " with " + this.people)
	} 
}

var movieDetails =  [
	{
		"name" : "3Idiots",
		"people" : "12"
	},
	{
		"name" : "Bahubali",
		"people" : "10"
	}
]
movieDetails.forEach(function(element){
	movie(element.name)(element.people);
})
//movie("asds")(12);


//prototypes

var studentDetails = function(name){
	this.name = name;
}

studentDetails.prototype.extraDetails = function(extraDetails){
		this.extraDetails = extraDetails;
		console.log(this.extraDetails)
	}
studentDetails.prototype.fullDetails  = function(school) {
	this.school = school;
	console.log(this.name, this.school, this.extraDetails)
	
};

// fullDetails("HAR", "SAFASDASD")
var person1 = new studentDetails("hari");


person1.extraDetails("10th class");
person1.fullDetails("st'annns school");
