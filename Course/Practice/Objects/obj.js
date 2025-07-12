console.log("Objects in JS\n");

/* 
  A data structure that stores key-value pairs.
  In objects we define key:value pairs for every item/property.
  We create objects using curly braces instead of brackets 
  like the case in arrays.
  The order of properties in objects does not matter like in arrays.
	*** If ur object contained a function, and that function returns a new
  property, you MUST first invoke that function for the new property to be 
	created.
*/

const person = {
	id: 1,
	firstName: "John",
	lastName: "Smith",
	gender: "Male",
	birthYear: 1975,
	email: "john.smith@gmail.com",
	telephone: ["079 123456", "077 789456"],
	socialMedia: ["Instagram", "Facebook", "Whatsapp"],
	position: "Web Developer",
	isMarried: false,

	// calcAge: function (birthYear) {
	// 	return 2025 - birthYear;
	// },

	// calcAge: function () {
	// 	return 2025 - this.birthYear; // this here is a reference to the object it self.
	// },
	calcAge: function () {
		this.age = 2025 - this.birthYear;
		return this.age;
	},
	getSummary: function () {
		if (this.isMarried) {
			return `${this.firstName} is ${this.calcAge()} years old, ${
				this.position
			}, and he is married.`;
		} else {
			return `${this.firstName} is ${this.calcAge()} years old ${
				this.position
			}, and he is not married.  `;
		}
	},
};
console.log(person);

// Retrieving data from objects;
// using . (dot)  - recommended
console.log(person.firstName);

// using brackets
console.log(`${person["firstName"]} ${person["lastName"]}`);
const inYears = " (In Years)";
console.log(person["age"] + inYears);

const personInquiry = prompt("What do you want to know about this person? ");

if (person[personInquiry] === undefined) {
	console.log("Property not found. Error 404");
} else {
	console.log(person[personInquiry]);
}
// Edit a property value
//person.age = 50;

// Adding new properties
person.Address = "Amman, Jordan";
person["Salary"] = 1500;
// console.log(person);

const firstName = person.firstName;
const instagram = person.socialMedia[2];

console.log(
	`${firstName} has ${person.socialMedia.length} social media(s), and he uses ${instagram}
   the most.`
);

console.log(person.calcAge());

// getSummary
console.log(person.getSummary());
console.log(person.age);
