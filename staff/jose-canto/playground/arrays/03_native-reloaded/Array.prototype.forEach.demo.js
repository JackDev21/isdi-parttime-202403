delete Array.prototype.forEach


Array.prototype.forEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    var element = this[i]

    callback(element, i, this)
  }
}

console.info(" -- CASE print chars to uppercase in console -- ")

var chars = ['a', 'b', 'c']; // new Array("a", "b", "c")

chars.forEach(function (char) { console.log(char.toUpperCase()) });
// Expected output: "A"
// Expected output: "B"
// Expected output: "C"


console.info(" -- CASE print num multiply * 10 -- ")
var numbers = [10, 20, 30, 40]

numbers.forEach(function (num) {
  console.log(num * 10)
})
// Expected output: "100"
// Expected output: "200"
// Expected output: "300"
// Expected output: "400"


