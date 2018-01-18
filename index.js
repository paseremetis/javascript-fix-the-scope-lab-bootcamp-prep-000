function myAnimal() {
  var animal = 'dog'
  return animal2
}

function yourAnimal() {
  var animal2 = 'cat'
  return animal2
}

1.	function outerFunction() {
2.	  var innerVariable = "I'm sort of a secret.";
3.	 
4.	  return function innerScope() {
5.	    var inaccessible = "Nothing can touch me.";
6.	 
7.	    return innerVariable;
8.	  }
9.	}


 // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

function add2(n) {
  return n + two

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction
