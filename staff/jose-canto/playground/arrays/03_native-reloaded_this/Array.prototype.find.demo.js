delete Array.prototype.find // Elminamos el metodo find para evitar usar el metodo.

// Recrear metodo find

Array.prototype.find = function (callback) {

  for (var i = 0; i < this.length; i++) {
    var element = this[i]

    var matches = callback(element)

    if (matches) {
      return element
    }
  }
}

var cars = ["Ferrari", "Mazda", "Porche"]
console.log(cars)

console.info("--- CASE find car model ---")

var foundCars = cars.find(function (car) { return car === "Mazda" })
console.debug(foundCars)

//! TEST ASSERT

console.assert(foundCars === "Mazda", "find Mazda model")

//? -----------------------------------------------------------

console.info("--- CASE return first element of array ---")

var numbers = [5, 12, 8, 130, 44];

var found = numbers.find(function (num) { return num > 10 });

console.log(found);
// Expected output: 12

//! TEST ASSERT

console.assert(found === 12, "first element of array is 12")