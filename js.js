// 1.how to find duplicate elements in given array
const arrNumber1 = [2, 3, 2, 5, 4, 7, 4, 5];
let dupliate = arrNumber1.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
// console.log(dupliate);

// 6. how to remove duplicate values from array in js
const arrayContaineDuplicateV = [1, 2, 2, 3, 5, 3];
let v = [...new Set(arrayContaineDuplicateV)];
// console.log(v);

// 2. How to find max and min value in a given array

const arrNumber2 = [1, 9, 87, 65, 655];
// i)
let maxValue = (arr) => arr.reduce((a, e) => Math.min(a, e));

// ii)
const minValue = (arr) => {
  return arr.reduce((a, e) => {
    return Math.max(a, e);
  });
};
// console.log(maxValue(arrNumber2));
// console.log(minValue(arrNumber2));

// simple way
let aa = [10, 8, 9, 2];
// console.log(Math.min(...aa));

// 3. what is the difference between '==' and '===' in js
let a = 10;
let b = "10";
// console.log(a == b);
//it check only value the output will be true
// console.log(a === b);
//it can also check data type the output will be false

// 4. how to find second largest value and remove first largest value in array
//  i) find the largest value from array
// ii) find the index of largest value
// iii) Delete Index from Array using splice method
// iv) apply same logic that use for find largest value

const intArray = [2, 8, 9, 7];
// console.log(intArray);
// console.log(...intArray);

const largestValue = (arr) => {
  let firstLargestValue = Math.max(...arr);
  index = arr.indexOf(firstLargestValue); //l=9 i=2
  arr.splice(index, 1); //2,1
  let secondLargestValue = Math.max(...arr);
  return secondLargestValue;
};
// console.log(largestValue(intArray));

// 5. What is Diffrence between filter() and find() method in js
// find() method returns the first element with given condition satisfies  and it will return single value
const birthYear = [2008, 1989, 1988, 2007, 2006];
// i want to print first birhtYear which is less then 2000
const firtValue = birthYear.find((e) => e < 2000);
// console.log(firtValue);

// filter() method return all element with given condition satiefies and it will return an array
const birthValue = birthYear.filter((e) => e < 2000);
// console.log(birthValue);

// 6. how to find the missing number in a given integer array of 1 to 10
const arrNum = [1, 2, 3, 4, 5, 6, 9, 10]; //missing  number 7 and 8

// sabse pehle ek empty array banaunga jisme missing element store kar paun
let missingValueArry = [];

// pehle min and max value nikalenge array me se uske liye hum ek function use karenge
const missingValue = (arr) => {
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  // console.log(maxValue);
  // console.log(minValue);
  // mujhe yaga min and max value mil gyi ab yaha mai for loop laga dunga
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingValueArry.push(i);
    }
  }
  return missingValueArry;
};

// console.log(missingValue(arrNum));

// 7. how to find even or odd number is a given array in js
const arrNum2 = [1, 3, 5, 2, 7, 5, 9];
// console.log(arrNum2);

for (evenOdd of arrNum2) {
  // i)
  // console.log(evenOdd % 2 === 0 ? "even" : "odd");
  // if (evenOdd % 2 === 0) console.log(`${evenOdd}:even`);
  // else console.log(`${evenOdd}:odd`);
}

// ii)
// let getValue = arrNum2.map((e) => (e % 2 === 0 ? `${e}:even` : `${e}:odd`));
// console.log(getValue);

// iii)
// let getEven = arrNum2.filter((e) => {
//   return e % 2 === 0;
// });
// console.log(`Even:${getEven}`);
// let getOdd = arrNum2.filter((e) => e % 2 !== 0);
// console.log(`Odd:${getOdd}`);

// iv)
// for (let i = 0; i < arrNum2.length; i++) {
//   if (arrNum2[i] % 2 == 0) console.log("even");
//   else console.log("odd");
// }

// 8. how to find the sum of all elements in a given arry in js

const arrNum3 = [1, 9, 6, 4];
let sumOffAllElements = arrNum3.reduce((a, e) => a + e);
// console.log(sumOffAllElements);

const sum = (arr) => {
  let getSumOfAllEle = arr.reduce((a, e) => a + e);
  // console.log(getSumOfAllEle);
};
sum(arrNum3);

// 9. how to find factorial(n!) of a gfiven number in js
// factorial of negative number is not possible
// let num = Number(prompt("enter number for factorail"));
let num = 5;
let fact = 1;
if (num === 0) console.log(`Factorial of given number ${num} is 1`);
else if (num < 0) console.log(`factorail of negative number is not possible`);
else if (num > 0) {
  for (let i = 1; i <= num; i++) {
    fact = fact * i; //1*1=1,2*1=2 ,3*2=6, 6*4=24 ,24*5=120
  }
  // console.log(`The factorial of given number is ${fact}`);
  // console.log(num);
}

// Imp
// /count the lenght of string withour using length property
let str = "hello";
// console.log(str);
function countStringLength(str) {
  let count = 0;
  for (let s in str) {
    count++;
  }
  return count;
}
// console.log(countStringLength(str));
// console.log(str.length);

// 10. how to find prime number in js
// prime number are those which is devided by it self eg.2,3,5,7,11,etc,.
// prime number of negative number is not possible
// let num4 = Number(prompt("enter number"));
// if (num4 === 1) console.log(`${num4} is neither prime or composite`);
// else if (num4 < 1) console.log(`the prime number of ${num4} is not possible`);
// else {
//   for (let i = 2; i < num4; i++) {
//     if (num4 % i === 0) {
//       var result = `${num4} is not a prime number`;
//       break;
//     } else {
//       var result = `${num4} is prime number`;
//     }
//   }
//   console.log(result);
// }

// 11. how to find vowels from string in js
// i)
// let str = prompt("enter string");
// str = str.toLowerCase();
// if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
//   console.log(`${str} is vowel`);
// } else {
//   console.log(`${str} is not vowels`);
// }

// 12. how to reverse string in js
let str1 = "hello";
let strArr = str1.split("");
let revStrArr = strArr.reverse();
let revStr = revStrArr.join("");
// console.log(revStr);
// i) using function
// let string = prompt("enter string");
const revString = (str) => {
  let strArr = str.split("");
  // console.log(strArr);
  let strRevArr = strArr.reverse();
  // console.log(strRevArr);
  // console.log(strRevArr.join(""));
};
// revString(string);

// 13.how to find palidrome in js
// let string = "sohel";
// string = string.toLowerCase();
// const palindrom = (str) => {
//   console.log(str);
//   let revStr = str.split("").reverse().join("");
//   // console.log(revStr);
//   if (revStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(palindrom(string));

// 14.how to swap number withour using third variable
// let num1 = 5;
// let num2 = 6;
// console.log("before");
// console.log(num1);
// console.log(num2);
// num2 = num1 + num2; //5+6=11
// num1 = num2 - num1; //11-5=6
// num2 = num2 - num1; //11-6=5
// console.log("after");
// console.log(num1);
// console.log(num2);

// 17.how to make calculator in js
// let num1 = Number(prompt("enter first number"));
// let num2 = Number(prompt("enter second number"));
// let operator = prompt("enter operator like +, -, *, /");
// switch (operator) {
//   case "+":
//     alert(`${num1} + ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     alert(`${num1} + ${num2} = ${num1 - num2}`);
//     break;
//   case "*":
//     alert(`${num1} + ${num2} = ${num1 * num2}`);
//     break;
//   case "/":
//     alert(`${num1} + ${num2} = ${num1 / num2}`);
//     break;
//   default:
//     alert("please enter given operator ");
// }

// 18.how to compare two arrays are equal or not in js

// 19.how to find intersection of two arrays in js
const arr1 = [1, 2, 4, 2, 6];
const arr2 = [3, 4, 2, 7, 9];

let intersectionValue = arr1.filter((ele) => {
  return arr2.includes(ele);
});
// console.log(intersectionValue);

// 22. hot to convert km into miles
// 1mile=0.6237
// let num = Number(prompt("enter km "));
let mile = 0.62137;
let miles = mile * num;
// console.log(`${num}:kilometer  miles: ${miles}`);

// 23. how to convert first letter of a string to uppercase in js

// let str = prompt("enter string");
// console.log(str);
// let firstLettrCapital = (str) => {
//   let strArr = str.split(" ");
//   console.log(strArr);
//   let getValue = strArr.map((e) => {
//     return e.charAt(0).toUpperCase() + e.slice(1);
//   });
//   return getValue.join(" ");
// };
// console.log(firstLettrCapital(str));

// 24.how to find fibonacci sequence in js
// fibonacci sequence is the integer sequence where first two terms are 0 and 1.after that next term is definde as the sum of the previous two terms eg- 0,1,1,2,3,5,8,...

let x = 0;
let y = 1;
for (let i = 0; i < 5; i++) {
  // console.log(i);
  let temp = x + y; //i)0+1=temp=1, ii)1+1=temp=2, ii)1+2=temp=3, iv)temp=f5 ,v)temp=8
  x = y; //i)0=1=>a=1,  ii)1=1=>a=1,  iii)a=2 , iv)a=3 ,v)a=5
  y = temp; // i)1=1,  ii)1=2=>b=2,   iii)b=3, iv)b=5 v)b=8
  console.log(temp); //i)1,2,3,5,8
}

// 26.find the number of occurences of character in string in js
//eg- hello world isme agr hume check karna hai ki l kitni dafa aya hai (3bar aya hai)
// let str = prompt("enter string");
// console.log(str);
let letter = prompt("enter letter");
let strL = str.length;
let count = 0;
for (var i = 0; i < strL; i++) {
  // console.log(str[i]);
  if (str[i] === letter) {
    count++;
  }
}
// console.log(`in ${str} occurences of ${letter} is ${count}`);

// 27.program to print the table of any user defined number using function in js?
// let num = Number(prompt("enter number for table"));
// const table = (n) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} X ${i} = ${num * i}`);
//   }
// };
// table(num);

// 28. Program to check Armstrong number in js
// armstrong number:sum of cubes of each digit is equl to the number itself eg-153,371,
// 153=1*1*1+5*5*5+3*3*3=153

// #### OUTPOUT BASED ####
// i)
// let count = 1;
// function demo() {
//   if (count == 1) {
//     let count = 3;
//     console.log("count1", count);
//   }
//   console.log("count1", count);
// }
// demo();
// // or
// let count1 = 0;
// function printCount() {
//   if (count1 == 0) {
//     let count1 = 3;
//     console.log("count1", count);
//   }
//   console.log("count2", count);
// }
// printCount();

// // ii)
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// console.log(4);

// // iii)
// setTimeout(() => {
//   console.log(i);
//   var i = 10;
// }, 1000);

// // or
// var i = 10;
// setTimeout(() => {
//   console.log(i);
// }, 1000);

// // iv )
// console.log("2" + "2");
// console.log(2 - "2");
// console.log("2" - 2);

// // v)
// const arrNumber = [1, 2, 3, 4, 5];
// // difference map() and forEach()
// let mapMethod = arrNumber.map((e) => {
//   return e * 2;
// });

// let forEachMthod = arrNumber.forEach((e) => {
//   return e * 2;
// });
// console.log(mapMethod, forEachMthod);

//  this is all about javascript code
