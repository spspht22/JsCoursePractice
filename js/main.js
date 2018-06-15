// javascript course
// course instructor will be using Visual Studio


// var display = document.write("This is external JS");
// alert("This is an alert from external JS");

// input and output values
// // all the work that we are going to be doing will be an this extenal js page.
// document.write('Hello World');
// // alert('Hello People');

// console.log('Hello from Console');


// console.log("Hello Friend");
// // this is console log state;



// document.write("Hello Document");
// console.log("Hello Friend");
// document.write("Hello Document");

// Declare, Assignment Operators, Assign Value;

// Variables

// console.log("John PepperPots IV");


// let name = 'John PepperPots IV';
// let address,zip, state;
// address = "101 main street";
// zip = "60621";
// state = "CA";
// console.log(name);
// console.log(address);
// console.log(zip);
// console.log(state);

// ========Section 3, lecture 11 ===================
// can contain digits, letterm uinderscoresm and dollar signs
// start with letter, $ or _

// no keywords
//Cannot start with number
//fullName cs Fullname - case sensitive

//camelCase vs underscore

// let const var

// let let = "john";

// console.log(let);
// using let as a variable is not allowed and will noe be recongnized. 

// let name = "john";
// let Name;

// // try using the "Let" than "var" its a newer method for variables

// let Fullname = "John Pepper";
// // ?nothing wrong with this method but it is common practive to use camelCase.

// console.log(Name);

// // const meaning
// const SSN = 123:
// console.log(SSN);

// note that const does not work with numbers changing in a variable. 

// ========= SECTION 3, LECTURE 12 ==========
// string Concatenation

// let name ='John';
// let lastName = "Pepper";
// let fullName = name + " " + lastName;

// console.log("Hello there, your full name is: " + fullName);

// let info = "google";

// let url = "http:www." + info + ".com";

// console.log(url);

// let text = "Hey Ma it's me"; 
// //  this i sone method of using a single quote for a word missing a apostophre, u can aslo do it in reverse with single quotes on the outside and a one double quote on the inside.

// let text2 = "Hey Ma it\'s me again.";
// // this is method two where you can use a single apostophre after a backslash. 

// console.log(text);

// console.log(text2);


//========= SECTION 3, LECTURE 13 ==============
//Numbers

// let number = 4;
// // quotation marks are not needed for numbers.
// let number2 = 2.25;

// let sum = number * number2;
// let sub = number / number2;
// console.log(sum);
// console.log(sub);

// // using Modulus 

// let mod1 = 9;
// let mod2 = 2;

// let result = mod1 % mod2;

// console.log(result);

// ============ SECTION 3, LECTURE 14 =========

// let value1 = "name";

// let value2 = "lastname";

// let result = value1 + value2;

//  if we were to use - for these variables, it would return us with NaN (Not a Number)

// console.log(result);

// ========= SECTION 3, LECTURE 15==========
// Primitive Data Types In Javascript

// string
// let text = "This is a text.";
// // Number
// let value = 123;
// // Booloean

// let value1 = true;
// let value2 = false;
// // Null
// let number23 = null;
// // undefined
// let name;
// // symbol(ES6)

// console.log(typeof text);
// console.log(typeof value);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof number23);
// // this will display "object" on the console which means NULL.
// console.log(typeof name);

// ============ Section 3, lecture 16 ==========

// DATA TYPES IN JAVASCRIPT


//ARRAYS, FUNCTIONS, OBJECTS

// let fruits = ["apple", "orange", "banana"];

// let code = function code () {
// 	console.log("Hello World")
// };

// let person = {
// 	name: "john",
// 	lastname: "Pepper"
// };

// console.log (typeof fruits);
// console.log (typeof code);
// console.log (typeof person);


// ============== SECTION 3, LECTURE 17 =========

// arrays in Javascript

// two ways to create an array
// let friends = new Array("john", "peter", "bob", "will");

// let oldFriends = ["peter", 45, true, null, undefined];

// console.log(oldFriends[0]);

// ===== SECTION 3, LECTURE 18============

// Functions IN JAVASCRIPT

// declaration, Invoke, Return, Parametersm Expression


//declaration
// function hello () {
// 	console.log("hello World");
// 	console.log("hello John");
// 	console.log("hello Strager");
// 	console.log("hello Peter");
// 	console.log("hello Bob");
// };
// // function is created.

// hello();
// // function is called.

// function add () {
// 	let sum = 2 + 2;
// 	let times = sum * 4;
// 	return times;
// };

// function add (num1, num2) {
// 	let sum = num1 * num2;
// 	return sum;
// };

// let result = add(12,56);
// let result2 = function (num1, num2) {
// 	let sum = num1/num2;
// 	return sum;
// };

// console.log(result);
// console.log(result2(24, 3));

// console.log(add(10, 30));
// console.log(add(4, 7));

// =========== SECTION3, LECTURE 19 =========
//objects in JAVASCRIPT


// let person = {
// 	name: "Martin",
// 	lastName: "silva",
// 	age: 21,
// 	education: false,
// 	work: true,
// 	siblings: ["sister", "brother"],
// 	fullName: function () {
// 		console.log( "The full name of the person is: " + person.name + " " + person.lastName);
// 	}
// };

// let personName = person.name;
// let personLastName = person["lastName"]

// console.log(personName);
// console.log(personLastName);

// person.fullName();


// ============ SECTION 3, LECTURE 20 =======
// IF ELSE STATEMENTS
// CONDITIONAL STATEMENTS IN JAVASCRIPT
//COMPARISON OPERATORS.
// >,<,>=,<=,==,===,!=,!==


// EXAMPLE
// if (2 > 1) {
// 	console.log("i am a math genius!!");
// } 
//  the message appears in the console. 

// if (2 < 1) {
// 	console.log("i am a math genius!!");
// }


// let num1 = 7;
// let num2 = 8;

// if (num1 > num2 ) {
// 	console.log("First number is bigger than the second");
// };

// if (num1 < num2 ) {
// 	console.log("First number was smaller than second number");
// };

// let num1 = 8;
// let num2 = 8;

// if(num1 == num2) {
// 	console.log("numbers are eqaul")
// };

// let num1 = 8;
// let num2 = 8;

// if(num1 != num2) {
// 	console.log("numbers are not eqaul");
// } else {
// 	console.log("numbers are equal");
// }

// let num1 = 8;
// let num2 = 8;

// if(num1 == num2) {
// 	console.log ("number are equal")
// }

// ===========SECTION 3, LECTURE 21 =========
//IF ELSE STATEMENTS
//CONDITIONAL STATEMENTS IN JAVASCRIPT
// COMPARISON OPERATORS
// >,<,>=,<=,==,===,!=,!==


// let person1 = "john";
// let person2 = "bob";

// let person = "peter";

// if (person === "john") {
// 	console.log("this dude is john");
// } else if (person === "bob") {
// 	console.log("this dude is Bob")
// } else {
// 	console.log("I dont know who is this dude.");
// }


// =========== SECTION 3, LECTURE 22 ========
// LOGICAL OPERATORS && AND ||.

// let day = "Friday";
// let money = 55;
// if (day === "Friday" || money > 55) {
// 	console.log("You have 'going out money!'");
// }

// ========== SECTION 3, LECTURE 23 =====
// "", '', ``, 0, -0, NaN, false, null, undefined

// let bool1 = true;

// let bool2 = false;

// console.log(typeof bool1);
// console.log(typeof bool2);

// let value =  2< 5;

// console.log(typeof value);

// let result = true;

// if(result) {
// 	console.log("another boolean");
// }

// let number = 5;
// if( number < 6) {
// 	console.log("another BOOOOlean")
// }


// let text = " just a text";

// if(text) {
// 	console.log("How is This Possible?")
// }

// let falsy = 0;

// if(falsy) {
// 	console.log("runs only if true");
// } else {
// 	console.log("turns out to be false.")
// }

// ======= SECTION 3, LECTURE 24 ======
// UNARY OPERATOR
//meaning it requires 1 operand
// let text = "string";
// console.log(typeof text); // Operand

// //binary operator 
// //which means it uses 2 operands

// let number = 1;
// let number = 2 < 5;

//ternary

//condition ? (runs it true) : (runs if false)

let result = 8;

// result % 2 === 0 ? console.log("even number") : console.log("odd number");

let expression = result % 2;

function response (text) {
	console.log(text + " number");
};


expression === 0 ? response("even") : response("odd");













