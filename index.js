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

1.	var myScope = outerFunction();
1.	function outerFunction() {
2.	  var innerVariable = "I'm sort of a secret.";
3.	 
4.	  return function innerScope() {
5.	    var inaccessible = "Nothing can touch me.";
6.	 
7.	    return innerVariable;
8.	  }
9.	}
