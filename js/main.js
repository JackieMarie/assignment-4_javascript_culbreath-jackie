// FUNCTIONS BRANCH - NUMBER 6A

function howdy() {
  return 'Jackie Culbreath says hey there!';
}

console.log( howdy() );

// FUNCTIONS BRANCH - NUMBER 6B

var numba = function(string) {
  if (string.length<7) {
  	console.log( "What a short word!");
  }

  else if (string.length>7) {
   	console.log( "I'm sorry, but that's too many to count.");
  }

  else {
   console.log( "7, what a perfect choice!");
 }

}

numba("7");

numba("seventy");

numba("university");

// FUNCTIONS BRANCH - NUMBER 6C

function display(name) {
  console.log(name + " is a fantastic movie.")
};

function inception (display, favMovie) {
  display(favMovie)
};

inception(display, "Lord Of The Rings");
