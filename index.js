 var animal = 'dog'
function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  return (n + 2)
}

var funkyFunction = function(){
  var theFunk = funkyFunction
  return function(){
    return "FUNKY!"
  }
}

