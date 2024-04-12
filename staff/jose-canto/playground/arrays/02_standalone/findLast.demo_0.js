//delete Array.prototype.findLast // Elminamos el metodo findLast para evitar usar el metodo.

//Recrear el metodo findLast


function findLast(array, callback) {

  var startAtRigth = array.length - 1

  for (var i = startAtRigth; array.length > 0; i--) {

    var element = array[i];

    var matches = callback(element)

    if (matches) {
      return element
    }
  }
}

console.info("--- CASE   ")

var numbers = [5, 12, 50, 130, 44];

var found = findLast(numbers, function (num) { return num > 45 });

console.log(found);
// Expected output: 130

//! TEST ASSERT

console.assert(found === 130, "last number is 130")

//? ----------------------------------------------------------------------

var fruits = [
  { fruit: "manzana", quantity: 2 },
  { fruit: "pera", quantity: 3 },
  { fruit: "naranja", quantity: 6 },
  { fruit: "platano", quantity: 5 },
]

var foundFruta = findLast(fruits, function (fruit) { return fruit.quantity > 4 });

console.log(foundFruta);


//! TEST ASSERT

console.assert(foundFruta.fruit === "platano", "fruit is platano")
console.assert(foundFruta.quantity === 5, "fruit is platano")