"use strict";

//functions
function isSnakeEyes(a, b) {
  if (a === 1 && b === 1) {
    console.log("Snake Eyes");
  } else {
    console.log("Not Snake Eyes");
  }
}
// isSnakeEyes(1, 1);
// isSnakeEyes(1, 2);

function multiply(x, y) {
  return x * y;
}
// console.log(multiply(9, 6));

//let arr1 = [];
function lastElement(arr) {
  if (arr.length) {
    arr = arr[arr.length - 1];
  } else {
    arr = null;
  }
  return arr;
}
// console.log(lastElement([1, 4, 8]));

function sumArray(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArray([2, 4, 3]));

// let day = 'Sunday'
// switch(day){
//   case 1:
// }

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return `EGG`;
  },
};
// console.log(hen.layAnEgg());
// console.log(hen.layAnEgg());
// console.log(hen.eggCount);

//map method()
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Harmione", last: "Hagrid" },
  { first: "Minerva", last: "McGunagall" },
];
const firstNames = fullNames.map((firstName) => {
  return firstName.first;
});
// console.log(firstNames);

//arrow functions
const greet = (personName) => {
  return `Hey ${personName}!`;
};
// console.log(greet("Udeme"));

//filter method()
const userNames = ["Amos", "Abakaliki", "University", "Technology"];

function validUserNames(username) {
  const filtered = username.filter(function (num) {
    return num.length < 10;
  });
  return filtered;
}
// console*log(validUserNames(userNames));

// userNames.filter(function (num) {
//   return num.length < 10;
// });

//some/every method()
const array1 = [2, 4, 6];

const allEven = array1.every(function (num) {
  return num % 2 === 0;
});

//DOM Manipulation
//selection by id
const first = document.getElementById("first");
// console.log(first);

//selection by tagName
const p = document.getElementsByTagName("p");
// console.log(p);

//selection by className
const allClass = document.getElementsByClassName("second-third");
// console.log(allClass);

//looping through the classes
// for (let all of allClass) {
//   allClass.innerText = "hello";
// }

//querySelector
//selects the first of a particular element
const query1 = document.querySelector("#first");
// console.log(query1);

const query2 = document.querySelector(".second-third");
// console.log(query2);

//querySelectorAll- select all the elements
const query3 = document.querySelectorAll(".second-third");
// console.log(query3);

//Manipulating DOM
//innerText
query1.innerText = "I am First paragraph";
query2.textContent = "I am second paragraph";
// query1.innerText = "I am First paragraph";

//getAttribute()
const link = document.querySelector("a");
const form = document.querySelector("input[type='text']");
// console.log(link.innerText);
link.getAttribute("href");
form.getAttribute("type");

//setAttribute()
// link.setAttribute("href", "xample.com");
// form.setAttribute("type", "checkbox");

// //rainbow task
// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]rg allSpans = document.querySelectorAll("span");
// // for (let i = 0; i < colors.length; i++) {
// //   allSpans[i] += colors[i];
// // }
