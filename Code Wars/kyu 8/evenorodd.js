/*

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function evenOrOdd(number) {
    // create a output variable that's an empty string.
    let output = '';
    // set an operator to check if number is a modulous of 2.
      // if number is a modulous of 2 set output to "Even" else set output to "Odd".
    number % 2 == 0 ? output += "Even" : output += "Odd";
    // return output.
    return output;
  }