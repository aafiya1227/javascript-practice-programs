//programme for written table
/*const number = parseInt(prompt(`enter an integer:`));
for (let i = 1; i <= 10; i++) {
  const result = i * number;

  console.log(`${number} * ${i} =${result}`);
}*/

// table of 3
/*const num = 3;
for (let i = 1; i <= 10; i++) {
  const res = i * num;
  console.log(`${num} * ${i} = ${res}`);
}

/*const sum = function (a, b, c) {
  d = a + b + c;
  console.log(a + b + c);
  return d;
};
sum(1, 2, 3);

//hello world
console.log("hello world");
//alert(`helloworld`);

// add 2 no
//print the sum of that and that is that

/*const num1 = 5;
const num2 = 7;
const add = num1 + num2;
console.log(`the sum of ${+num1} and ${+num2} is ${add}`);

//by using array
const array = [5, 7];
const adding = [5 + 7];
console.log(`the sum of ${array[0]} and ${array[1]} is ${adding}`);

// by using prompt
/*const numA = parseInt(prompt(`enter the first number`));
const numB = parseInt(prompt(`enter the second number`));
const plus = numA + numB;
console.log(`the sum of ${numA} and ${numB} is ${plus}`);*/

// to find a square root
// by prompt
/*const number = prompt(`enter the number`);
const result = Math.sqrt(number);
console.log(`the square root of ${number} is ${result}`);*/

// by variable
const no = 9;
const sq = Math.sqrt(no);
console.log(`the sauare root of ${no} is ${sq}`);

//area of triangle
const base = 6;
const height = 12;
const area = (base * height) / 2;
console.log(area);

//by prompt
/*const side1 = prompt(`enter the first side`);
const side2 = prompt(`enter the second side`);
const side3 = (side1 * side2) / 2;
console.log(`the area of triangle is ${side3}`);*/

//swap vaiables

/*let a = prompt(`enter the first variable`);
let b = prompt(`enter the second variable`);
let temp;
/*temp = a;
a = b;
b = temp;
[a, b] = [b, a]; // by distructing array
console.log(`the value of a after swaping ${a}`);
console.log(`the value of b after swapping ${b}`);*/

// print 1 to 10 in seperate row

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// print 1 to 10 in a single row
let s = "";
for (let i = 1; i < 11; i += 1) {
  s += i + " ";
}
console.log(s);

// convert kilometers to miles

/*const kilometer = prompt("enter value in kilometers");
const factor = 0.621371;
const miles = kilometer * factor;
console.log(`In ${kilometer} km there is ${miles} miles`);*/

// convert  celsius to fahrenheit

/*const celsius = prompt("enter the value of celsius");
const fac = 1.8 + 32;
const fahrenheit = celsius * fac;
console.log(
  `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit `
);*/

// convert letter into uppercase

/*function captalization(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}
const string = prompt(`enter a string`);
const result = captalization(string);
console.log(result);*/

// convert letter to lowercase
/*const string = prompt(`enter the string `);
console.log(string.toLowerCase());
console.log (string .toUppercase())*/

//

/* programme to generate a random number\
const b = Math.random();
console.log(b);
//between  1 to 10
const a = Math.random() * (10 - 1) + 1;
console.log(a);
// interger value  between max and min

/*const max = parseInt(prompt(`enter the maximum value`));
const min = parseInt(prompt(`enter the minimum value`));

const res = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(res);*/

// check a number is positive negative or zero

/*const number = parseInt(prompt("enter a number"));
if (number > 0) {
  console.log(`the  giver number is positive ${number}`);
} else if (number == 0) {
  console.log(`the giver number is 0`);
} else {
  console.log(`given number is negative ${number} `);
}*/

//nested if
/*const numb = parseInt(prompt("enter the numb"));
if (numb > 0) {
  if (numb == 0) {
    console.log(`the giver number is 0`);
  } else {
    console.log(`the given number is positive`);
  }
} else {
  console.log(`given number is negative`);
}*/

// check if the number is od or even
/*const number = prompt(`enter the number`);
if (number % 2 == 0) {
  console.log(`The given number is even = ${number}`);
} else {
  console.log(`the given number is odd = ${number}`);
}*/

// ternary operator
/*const number = prompt(`enter the number`);
const result = number % 2 == 0 ? "even" : "odd";
console.log(`The given number ${number} is ${result}`);*/

// to find maximum no
// by ternary operator
/*const number1 = prompt(`enter the first number`);
const number2 = prompt(`enter the second number`);
const max =
  number1 > number2
    ? `number1 is greater ${number1}`
    : `number2 is greater ${number2}`;
console.log(max);*/

// by if else
/*const num1 = parseFloat(prompt(`enter the first number`));
const num2 = parseFloat(prompt(`enter the second number`));
const num3 = parseFloat(prompt(`enter the third number`));

const max = Math.max(num1, num2, num3);
console.log("the greatest number is " + max);

/*if ((num1 > num2, num1 > num3)) {
  console.log(`number 1 is greatest that is ${num1}`);
} else if ((num2 > num1, num2 > num3)) {
  console.log(` number 2 is greatest that is ${num2}`);
} else {
  console.log(`number 3 is greatest that is ${num3}`);
}*/

// find a prime number
/*const number = parseInt(prompt(`enter a number`));
let isPrime = true;

if (number === 1) {
  console.log(`1 is neither a prime not a composite number`);
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
}*/

// find prime numbers between two no.s
/*const lowerNumber = parseInt(prompt(`enter the lower number`));
const higherNumber = parseInt(prompt(`enter the higher number`));
console.log(`The lower number is ${lowerNumber}`);
console.log(`The higher number is ${higherNumber}`);
console.log(
  `The prime number between ${lowerNumber} and ${higherNumber} are :`
);

for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  if (i > 1 && flag == 0) {
    console.log(i);
  }
}*/

// find the factorial of a number

/*const number = parseInt(prompt(`enter a positive number`));
if (number < 0) {
  console.log(`ERROR! The factorial for negative number is never exist`);
} else if (number === 0) {
  console.log(` The factorial of ${number} is always 1`);
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}*/

// make a simple calculator
/*const operator = prompt(`enter  an operator (either +,-,* or /) `);

const num1 = parseFloat(prompt(`Enter the first number`));
const num2 = parseFloat(prompt(`enter the seond number`));
let result;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}
console.log(`The first numer is ${num1}`);
console.log(`The given operator is ${operator}`);
console.log(`The second number is ${num2}`);
console.log(` So the ${num1}  ${operator} ${num2} = ${result}`);*/

// the sum of natural number using for loop

/*const number = parseInt(prompt(`enter the positive integer`));
let sum = 0;
// byb for loop
for (let i = 1; i <= number; i++) {
  sum += i;
}
console.log(`the sum of natural numbers is ${sum}`);

// by  while loop
let sum = 0,
  i = 1;
while (i <= number) {
  i++;
  sim += i;
}
console.log(`The sum of given number is ${sum}`);*/

// find the last digit is same or not
/*const a = parseInt(prompt(`Enter the first integer`));
const b = parseInt(prompt(`Enter the second integer`));
const c = parseInt(prompt(`Enter the third integer`));

let result1 = a % 10;
let result2 = b % 10;
let result3 = c % 10;

if (result1 == result2 && result1 == result3) {
  console.log(`${a} , ${b} , ${c} have the same last digit `);
} else {
  console.log(`${a} , ${b} , ${c} have the different last digit `);
}*/

// find hcf
// using for loop

/*let number1 = parseInt(prompt(`Enter a first positive integer`));
let number2 = parseInt(prompt(`Enter a second positive integer`));

let hcf;

for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}
console.log(`Hcf of ${number1} and ${number2} is ${hcf}`);

// by while loop
while (number1 != number2) {
  if (number1 > number2) {
    number1 -= number2;
  } else {
    number2 -= number1;
  }
}
console.log(`HCF if ${number1}`);*/

// find the lcm by while loop
/*let min = number1 > number2 ? number1 : number2;
while (true) {
  if (min % number1 == 0 && min % number2 == 0) {
    console.log(`The LCM of ${number1} and ${number2} is ${min}`);
    break;
  }
  min++;
}
// by for loop
let hcf;
for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
  let lcm = (number1 * number2) / hcf;
  console.log(`LCM of ${number1} and ${number2} is ${lcm}`);
}*/

// find the factors of a number

/*const number = prompt(`Enter a positive integer`);
console.log(`The factors of ${number} is :`);

for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}*/

// sum of natural nuber using recursion

/*function sum(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sum(n - 1);
  }
}

let n = 8;
console.log(sum(n));

// program to guess a number
function guessNumber() {
  const random = Math.floor(Math.random() * 10) + 1;
  let number = parseInt(prompt(`Guess a number from 1 to 10`));
  while (number !== random) {
    number = parseInt(prompt(`Guess a number from 1 to 10`));
  }
  if (number === random) {
    console.log(`You guessed the correct ${number} number🎉`);
  }
}
guessNumber();*/

// programme to shufle the deck of cards
/*const suits = ["spades", "diamonds", "club", "heart"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];

let deck = [];

for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}

// shuffle the card
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
console.log(`the first five cards are :`);

for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}

//const intialNumber = 1;
//const finalNumber = 10;
sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);*/

/* cube
function surfaceArea() {
  return 6 * a * a;
}
function volume() {
  return a * a * a;
}
let a = 7;
console.log(surfaceArea());
console.log(volume());*/
let a = 7;
let surfaceArea = 6 * a * a;
let volume = a * a * a;

console.log(surfaceArea);
console.log(volume);

// simple interest

let p = 1500;
let r = 1.4;
let t = 3;

const si = (p * r * t) / 100;

console.log(si);

/*You are having a get together at your house and your mother asks
 you to distribute candies equally amongst all your cousins. 
 You want to determine if the number of candies given by your mother
  can be equally distributed or not*/

let candies = 60;
let cousins = 10;

let distribute = candies % cousins == 0;
console.log(distribute);
if (distribute != 0) {
  console.log(`yes`);
} else {
  console.log(`no`);
}

// win and lose exercise

/*You and your friend decide to play a game where given some numbers,
 you have to find the maximum number. If the maximum is an even number,
  you win and if it is odd, your friend wins.*/

let n = 5;
let numbers = 2 + 4 + 6 + 8 + 15;

let max = numbers;
if (max % 2 == 0) {
  console.log(`you win`);
} else {
  console.log(`your friend win `);
}

/*Your teacher has assigned you the task of finding out the average weight of your class.
 She gives you the weights of all the students in the class and expects you to calculate
  the average weight of the class.Assume that there are only 10 students in your class.*/

let weight = [
  40.75 + 45.2 + 55.3 + 49.5 + 43.3 + 54.1 + 38.4 + 63.8 + 45.2 + 58.25,
];
const average = weight / 10;
console.log(average);

// find a number is odd or even

const arr = [45, 72, 84, 91, 65, 73];
const even = arr.filter((number) => {
  return number % 2 == 0;
});
const odd = arr.filter((number) => {
  return number % 2 !== 0;
});
console.log(even + ` even `);
console.log(odd + ` odd `);

//Given a two-digit number n, print both the digits of the number.

n = 78;
console.log(n.split);

//Given a number, find out if it is divisible by 6 or not.

/*const number = prompt(`enter a number`);
const num = number % 6 == 0;
console.log(`The given number ${number}  divisible by 6 is :` + num);

//Given a temperature t in Centigrade, convert it into Fahrenheit.
//Formula for conversion:
//Temp (℉) = (9t / 5) + 32

/*let c = 12;
let f = (9 * c) / 5 + 32;
let temp = (c = f);
console.log(temp);*/

function temperature(c) {
  console.log((f = (9 * c) / 5 + 32));
  temperature(12);
}

console.log(new Date());

//const string = parseInt(`1500, 1.4, 3`);
const simpleInterest = (p * r * t) / 100;
console.log(simpleInterest);

function interest(P, R, T) {
  var a = (P * R * T) / 100;
  return a.toFixed(6);
}
console.log(interest(1500, 1.4, 3));

//programme to replace character into a string

const str = `mr. red has a red house and a red car`;
const newText = str.replace(`red`, `blue`);
console.log(newText);

// programme sort word in a alphebetical order
const string = `my name is aafiya`;
const words = string.split(" ");
words.sort();
console.log(`The sorted words are:`);
for (const elements of words) {
  console.log(elements);
}

// create an object
const person = {
  firstName: `aafiya`,
  age: 21,
  hobbies: `coding`,
  greet: function () {
    console.log(`HEY AAFIYA`);
  },
  score: {
    maths: 78,
    english: 93,
    science: 96,
  },
};
console.log(typeof person);

console.log(person);
person.greet();
console.log(person.firstName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.score);

function getEvenNumbers() {
  var arr = [4, 5, 7, 8, 14, 45, 76];

  var evens = arr.filter((number) => number % 2 == 0);
  console.log("Even Numbers: " + evens);
}

getEvenNumbers();
