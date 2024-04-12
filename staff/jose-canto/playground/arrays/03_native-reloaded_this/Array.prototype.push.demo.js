delete Array.prototype.push


Array.prototype.push = function () {

  for (let i = 1; i < arguments.length; i++) {
    var argument = arguments[i]

    this[this.length] = argument
  }

  return this.length
}

console.info("--- CASE add animal to array ---")

var animals = ['pigs', 'goats', 'sheep'];
var count = animals.push('cows')

console.debug(count)
//* output: 4
console.debug(animals)
//* output: ['pigs', 'goats', 'sheep', 'cows']


// ?----------------------------------------------------------

console.info("--- Case add various animals to array ---")

var count = animals.push('chickens', 'cats', 'dogs');
console.debug(count);
//* Output: 7

console.debug(animals);
//* Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//! TEST ASSERT

console.assert(animals.length === 7, "animals length is 4")
console.assert(animals[0] === "pigs", "first animals is  pigs")
console.assert(animals[1] === "goats", "second animals is  goats")
console.assert(animals[2] === "sheep", "third animals is  sheep")
console.assert(animals[3] === "cows", "fourd animals is  cows")






