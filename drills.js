'use strict';

const HashMap = require('./HashMap');
const lor = new HashMap();

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
  
  console.log(palindromeChecker('hello'));
  console.log(palindromeChecker('acecarr'));
  console.log(palindromeChecker('addoooa'));
}

main();

function palindromeChecker(word) {
  let palindrome = new HashMap();
  let count = 0;
  for (let i=0; i < word.length; i++) {
    try {
      palindrome.get(word[i]); 
    }
    catch(err) {
      count++;
    }
    palindrome.set(word[i]);
  }
  if (word.length - count === (word.length / 2) || word.length - count === (word.length / 2 - .5) || word.length - count === (word.length / 2 + .5 )) {
    return true;
  } else {
    return false;
  }
}