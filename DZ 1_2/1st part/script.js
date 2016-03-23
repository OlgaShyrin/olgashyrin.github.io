function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

var x = prompt('Укажите число', 1);
var n = prompt('Укажите степень', 1);

console.log('result = ', pow(x, n));
