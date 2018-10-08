'use strict';

const HashMap = require('./HashMap');
// const lor = new HashMap();

function main() {
  // lor.set('Hobbit', 'Bilbo');
  // lor.set('Hobbit', 'Frodo');
  // lor.set('Wizard', 'Gandolf');
  // lor.set('Human', 'Aragon');
  // lor.set('Elf', 'Legolas');
  // lor.set('Maiar', 'The Necromancer');
  // lor.set('Maiar', 'Sauron');
  // lor.set('RingBearer', 'Gollum');
  // lor.set('LadyOfLight', 'Galadriel');
  // lor.set('HalfElven', 'Arwen');
  // lor.set('Ent', 'Treebeard');
  // console.log(lor.get('Maiar'));

  // console.log(palindromeChecker('hello')); FALSE
  // console.log(palindromeChecker('acecarr')); TRUE
  // console.log(palindromeChecker('addoooa')); TRUE

  let list = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

  anagramGrouping(list);
}

main();




function anagramGrouping(list) {
  let group1 = new HashMap();
  let arrayKeys = [];
  let newArray = [];
  for (let i = 0; i < list.length; i++) {
    let sortedWord = alphabetize(list[i]);
    try {
      group1.set(sortedWord, [...(group1.get(sortedWord)), list[i]]);
    } catch (err) {
      group1.set(sortedWord, [list[i]]);
      arrayKeys.push(sortedWord);
    }
  }

  for (let i=0; i< arrayKeys.length; i++) {
    try {
      newArray.push(group1.get(arrayKeys[i]));
    } catch (err) {
      console.log(err);
    }
  }
  console.log(newArray);
}


function alphabetize(word) {
  if (!word) {
    return;
  }
  word = word.split('');
  word = word.sort();
  word = word.join('');
  return word;
}



// function palindromeChecker(word) {
//   let palindrome = new HashMap();
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     try {
//       palindrome.get(word[i]);
//     } catch (err) {
//       count++;
//     }
//     palindrome.set(word[i]);
//   }
//   if (
//     word.length - count === word.length / 2 ||
//     word.length - count === word.length / 2 - 0.5 ||
//     word.length - count === word.length / 2 + 0.5
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
