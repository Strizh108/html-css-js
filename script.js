"use strict";

let i = 0; while (i <= 3) { console.log(i); i++; }

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
