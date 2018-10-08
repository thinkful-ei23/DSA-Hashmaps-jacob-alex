'use strict';

const HashMap = require('./HashMap');
const lor = new HashMap();
const palindrome = new HashMap();

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

  let word = 'acecarr';

  for (let i=0; i < word.length; i++) {
    palindrome.set(word[i]);
  }
  let count = 0;
  for (let i=0; i < palindrome._capacity; i++) {
    if (typeof(palindrome._slots[i]) !== 'undefined') {
      count++;
    }

  }
  



  console.log(palindrome);
  console.log(palindrome.length);

  



}




main();