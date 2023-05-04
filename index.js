/*
1)
Finish this code so that getDrink is true when thirsty is true, 
and getDrink is false when thirsty is false.

hint to test the code:
console.log(thirsty, " should equal ", getDrink);
*/

let thirsty = true;
let getDrink = null;

if( thirsty === true) {
    getDrink = true;
}
else getDrink = false;

console.log(thirsty, "should equal ", getDrink);

/*
2)
Change the light variable to "red", then "green",
then "yellow" and see what prints. Now change the
light variable to "purple". What happens?
Change the code so that only "green" says "Go." and 
random words says "Light malfunction".

Hint to test output:
console.log("light is ", light, " so car should ", driveCar);
*/

const light = "violet";
let driveCar = null;

if(light === "red") {
    driveCar = "Stop";
}
else if(light === "green") {
    driveCar = "Go";
}
else if(light === "yellow") {
    driveCar = "Wait";
}
else  
    driveCar = "Light Malfunction";

console.log("light is ", light, " so car should ", driveCar);

/*

3)
Write the code for this situation:
If the temperature is colder than
15 degrees, the person should put
a sweater.
*/

let temperature = 15;
let person = null;

//ternary
// console.log((temperature < 15) ? "wear sweater" : "No Sweater");

//if else
if (temperature <= 14){
    person = "wear sweater"
    console.log(`temperature is cold, ${person}`);
}
else person = "No sweater"
    console.log(`temperature is hot, ${person}`);

/*
4)
Define a number and check if it is odd or even.
*/

let number = 4;
let result = number % 2;

if (result === 0) {
    console.log("Number is even", result);
}
else console.log("Number is odd", result);

let num = 4;
console.log((num%2 === 1) ? "Number is Odd" : "Number is Even");

/*
5)
Write the code for this situation:
If the person is vegan, their dietary
restrictions are "no meat or dairy".
If the person is vegetarian, their
dietary restrictions are "no meat".
If the person is neither, their 
dietary restrictions are nothing (null).
*/

let personDiet = "non-vegetarian";
let dietaryRestrictions = null;
if(personDiet === "vegan") {
    dietaryRestrictions = "No Meat or Dairy";
}
else if(personDiet === "vegetarian") {
    dietaryRestrictions = "No Meat";
}
else dietaryRestrictions = "null";
console.log ("Person's dietary restrictions:", dietaryRestrictions);

///////////////////////////////

let personA = null;
let eatsDairy1 = false;
let eatsMeat1 = true;

if ((eatsDairy1 === false) && (eatsMeat1 === false)) {
    personA = "vegan";
} else if (eatsMeat1 === false) {
    personA = "vegetarian";
} else {
    personA = "no dietary restrictions";
}
console.log(personA);

/////////// Simplified Solution //////////
let personB = null;
let eatsDairy2 = false;
let eatsMeat2 = true;

if(!eatsDairy2 && !eatsMeat2) {
    personB = "vegan";
} else if(!eatsMeat2) {
    personB = "vegetarian";
} else {
    personB = "no dietary restrictions";
}
console.log(personB)
/////// stack ternary operators /////////
let eatsDairy3 = false;
let eatsMeat3 = true;
let personC = (!eatsDairy3 && !eatsMeat3)
? "vegan"
: !eatsMeat3
    ? "vegetarian"
    : "no dietary restrictions";
console.log(personC);
/*
6)
Debug the code below. You will need
to change the values of x, y, and z
to figure out where the error is!

text output:
console.log(answer);
*/
// problemNumber(6);

let x = 12;
let y = 12;
let z = 12;
let answer = null;

if(x === z && x === y) {
    answer = "all are equal";
}
else if (x === z && x !== y) {
    answer = "x and z are equal";
}
else if (x === y && x !== z) {
    answer = "x and y are equal";
}
else if (y === z && x !== y) {
    answer = "y and z are equal";
}
else  answer = "all are different"

console.log(answer);

/*
7)
Finish this code! Remove "true" as the
conditional statements and use the
variables eatsMeat and eatsDairy, as
well as the following: &&  !

text output:
console.log(diet);

problemNumber(7);
*/

let eatsMeat = true;
let eatsDairy = false;
let diet = null;

if (!eatsMeat && !eatsDairy)  {
  diet = "no dietary restrictions";
} else if (eatsDairy && !eatsMeat) {
  diet = "vegan";
} else if (eatsMeat && !eatsDairy) {
  diet = "no dietary restrictions";
} else if (eatsMeat && !eatsDairy) {
    diet = "eats nothing only drinks";
} 
console.log(diet);

console.log((eatsMeat && eatsDairy) ? "no dietary restrictions" : null);
console.log((!eatsMeat && eatsDairy) ? "vegan" : null);
console.log((!eatsMeat && !eatsDairy) ? "eats nothing only drinks" : null);
console.log((eatsMeat && !eatsDairy)) ? "non-vegetarian" : null

/*
8)
Write code for the following situation:
Sofia can drive manual and automatic cars.
Diego only knows how to drive automatic.
Sofia prefers to drive long distances (> 10 km).
Diego prefers to drive short distances.

text output:
console.log("The car is ", car, " and the distance is ", distance, "km, so the driver is: ", driver);
*/
// problemNumber(8);

let car = "automatic";
let driver = null;
let distance = 9;

if ((distance > 10) && (car === "manual" || "automatic")) {
    driver = "Sofia";
}
else if ((car === "automatic") && (distance <= 10)) 
    driver = "Diego";
console.log("The car is ", car, " and the distance is ", distance, "km, so the driver is: ", driver)

/*
9)
Finish the code below. 
Update "canVote" to the following:
- if age is not a number = "Input is not a number" 
(use "typeof" to do this check - see the MDN docs for info)
-  if age is at least 18 = "Legal voting age"
- if younger than 18 =  "Too young"

text output:
console.log(canVote);
*/
// problemNumber(9);

const age = 27;
canVote = null;

// if(typeof age !== "number"){
//   canVote = "Input is not a number";
// } else if (typeof age === "number" && age < 18) {
//   canVote = "Too young"
// } else canVote = "Legal voting  age"

// console.log(canVote)

if(typeof age !== "number"){
    canVote = "Input is not a number";
} else (typeof age === "number" && age < 18) ? (canVote = "Too young") : (canVote ="Legal voting  age")
console.log(canVote)
/*
10)
Get rid of the nested conditionals in
the code below by considering order of
operations. Also, add in a condition for
temperature between 15 & 30 degrees
(should be "warm")

text output:
console.log("The temp is ", temp, ", so the weather is ", weather);
*/
// problemNumber(10);

let temp = 111;
let weather = null;

if (temp < 15) {
    weather = "freezing";
  } else if( temp > 14 && temp < 31) {
    weather = "warm";
  }
 else if (temp >= 31) { 
    weather = "hot";
}

console.log("The temp is ", temp, ", so the weather is ", weather);

/*
11)
Comment out all of your previous code.
Rewrite problem 3 and 4 using ternary operators.
Rewrite also problem 9 using ternary operators. Do it for these 2 scenarios:
a) you can asume the type of 'age' will be a number, so you don't need to check it.
b) check the type of 'age', as stated in the original problem. You will need to
stack two ternary operators in this case. In your opinion, is this code cleaner
than you original answer on problem 9?
*/

// find solutions behind the problem.





