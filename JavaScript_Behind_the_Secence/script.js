'use strict';
function calAge(birthday) {
  const age = 2037 - birthday;
  //console.log(firstName); //Global Scope
  //return age;
  function printAge() {
    let output = `You are ${age}, born in ${birthday}`; //scope chain
    console.log(output);

    if (birthday >= 1981 && birthday <= 1996) {
      var millenial = true;

      //Creating New variable with same same as outer scope's variable
      const firstName = 'steven';

      //Reassigning outer scope's variable
      output = 'New OUTPUT!';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str); //block scope

      function add(a, b) {
        return a + b;
      }
    }

    //console.log(str); //outer block  scope not work
    console.log(millenial); //var variable is function scope

    //function block is use for outer scope
    //console.log(add(2, 3));//when not use 'use strict'; then it works otherways not work

    console.log(output);
  }
  printAge();
}

const firstName = 'Jonas';
calAge(1991);
// console.log(age);//outer scope not work
// printAge();
