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
  function funkyFunction(){
    var theFunk = "FUNKY!"
  }
  return function(){
    return "theFunk"
    return "FUNKY!"
  }
}