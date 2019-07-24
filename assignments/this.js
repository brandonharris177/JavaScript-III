/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: defalt mode, if "this" is not specifed it referes to the window (whole thing).
* 2. Implicit binding: It binds "this" to the object left of the (.) when the function is invoked.
* 3. Explict binding: Using call to bind "this" to a particular object.
* 4. New Binding: using the keyword "new" to create an object and refering the "this" to the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

let otherthing = {
  stuff: 'widget',
  plumbus: 'how to make a plumbus',
  howTo: function (){
    console.log(this.plumbus);
  }
}

otherthing.howTo(); 

// Principle 3

// code example for New Binding

function rick(catch_phrase){
  this.talking = catch_phrase;
}

let pickleRick = new rick('Wub a lub a dub dub!');

console.log(pickleRick.talking);


// Principle 4

// code example for Explicit Binding

function squanchy(){
  console.log(this.speak);
}

const squanchysays = {
  name: 'Minor_charecter',
  speak: 'I squanched',
}

squanchy.call(squanchysays);