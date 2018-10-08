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

  // INPUT = 'acecarr' : OUTPUT = true

  
  console.log(palindromeChecker('hello'));
  console.log(palindromeChecker('acecarr'));
  console.log(palindromeChecker('addoooa'));

}

main();


function palindromeChecker(word) {
  let palindrome = new HashMap();
  for (let i=0; i < word.length; i++) {
    palindrome.set(word[i]);
  }
  let count = 0;
  for (let i=0; i < palindrome._capacity; i++) {
    if (typeof(palindrome._slots[i]) !== 'undefined') {
      count++;
    }  
  }
  console.log('count',count)
  if (word.length - count === (word.length / 2) || word.length - count === (word.length / 2 - .5) || word.length - count === (word.length / 2 + .5 )) {
    return true;
  } else {
    return false;
  }
}