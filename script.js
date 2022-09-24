// "use strict";

// const details = {
//   name: 'John',
// };

// function getMessage(message) {
//   return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details, ['Hello']));
//Hello John


// 'use strict'
// function getThis() {
//   return this;
// }
// console.log(getThis());
//undefined in strict mode
//window in non-strict mode



// let name = "john";
// function printName() {
//   console.log(name);
// }
// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000);
// john


// printMessage();
// function printMessage() {
//   console.log('Hello');
// }
// Hello


// for (var i = 0; i < 10; i++) {
//   console.log('r');
// }
// console.log(i);
// 10


// function foo(a, b) {
//   return a * b;
// }
// const bar = foo.bind(null, 2);
// bar(2);
// 4


// function foo() {
//   return { bar: 1 };
// }
// console.log(typeof foo().bar);
//number


// "use strict";
// const details = {
//   message: 'Hello',
// };
// function getMessage() {
//   return this.message;
// }
// console.log(getMessage.call(details));
//Hello


// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000);
// }
// 3 3 3


// (
//   function (a) {
//     arguments[0] = 10;
//     return a;
//   }
// )(5);
//10


// function foo() { console.log(this); }
// foo.call(null);
// Window


// const foo = bar();
// const number = 2;
// function bar() { return number; }
// error


// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000);
// }
// 0 1 2


// var a = 1, b = function a(x) { x && a(--x); };
// console.log(a);
// 1


// console.log(message);
// let meassage = 'Hello';
// error


// let f = function g() { return 23; }
// console.log(typeof g());
// error





//Codewars1-2022Q3
//
//Numbers and strings
//
// 7 kyu https://www.codewars.com/kata/which-color-is-the-brightest

function brightest(colors) {
  const colorV = [];
  let maxV = 0, indexMaxV = 0;

  for (let i = 0; i < colors.length; i++) {
    colorV[i] = Math.max(parseInt(colors[i].toUpperCase().slice(1, 3), 16), parseInt(colors[i].toUpperCase().slice(3, 5), 16), parseInt(colors[i].toUpperCase().slice(5), 16));

    if (colorV[i] > maxV) {
      maxV = colorV[i];
      indexMaxV = i;
    }
  }

  return colors[indexMaxV].toUpperCase();
}

//7 kyu https://www.codewars.com/kata/disemvowel-trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/ig, "");
}

// 7 kyu https://www.codewars.com/kata/isograms
function isIsogram(str = '') {
  if (!str) return true;
  const strArr = str.toLowerCase().split('');

  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length; j++) {
      if (strArr[i] === strArr[j]) { return false; }
    }
  }

  return true;
}

// 7 kyu https://www.codewars.com/kata/digits-explosion
function explode(s = '') {
  let expS = "";
  for (let i = 0; i < s.length; i++) {
    let num = parseInt(s.charAt(i), 10);
    if (num === 0) {
      continue;
    } else {
      for (let j = 1; j <= num; j++) {
        expS += num;
      }
    }
  }
  return expS;
}

// function explode(s) {
//   return s.split("").map((e) => e.repeat(+e)).join();
// }

// 6 kyu https://www.codewars.com/kata/handshake-problem
function getParticipants(handshakes) {
  if (!handshakes) {
    return 0;
  }
  const arr = [];
  let count = 0;
  let participants = 1;

  for (let i = 0; i < handshakes; i++) {
    participants++;
    for (let j = 0; j < i + 1; j++) {
      count++;
      if (count === handshakes) {
        return participants;
      }
    }
  }
}

// 6 kyu https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word) {
  word = word.toLowerCase().split('');
  let newWord = "";
  console.log(word);
  for (let i = 0; i < word.length; i++) {

    if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
      newWord += "(";
    } else {
      newWord += ")";
    }
  }
  return newWord;
}

// 6 kyu https://www.codewars.com/kata/n-th-fibonacci
function nthFibo(n) {
  if (n === 1) { return 0; }
  let fiboCurr = 0, fiboNext = 1;

  for (let i = 1; i < n; i++) {
    let value = fiboCurr;
    fiboCurr = fiboNext;
    fiboNext += value;
  }
  return fiboCurr;
}

function head(arr) {
  return arr[0];
}

function last(arr) {
  return arr[arr.length - 1];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

// Array Deep Count
function deepCount(a) {
  let count = 0;
  (function flat(a) {
    a.forEach(function (el) {
      count++;
      if (Array.isArray(el)) flat(el);
    });
  })(a);
  return count;
}

// 6 kyu https://www.codewars.com/kata/length-of-missing-array
function getLengthOfMissingArray(arrayOfArrays) {
  const arrayOfLengths = (arrayOfArrays || [])
    .map(a => { if (a) { return a.length; } else { return 0; } })
    .sort((a, b) => a - b);

  if (arrayOfLengths.includes(0)) {
    return 0;
  }


  for (let i = 0; i < arrayOfLengths.length - 1; i++) {
    if (arrayOfLengths[i] + 1 !== arrayOfLengths[i + 1]) {
      return arrayOfLengths[i] + 1;
    }
  }

  return 0;
}
