/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
    // create array to carry string character pairs.
    let arr = [];
    // if sting is not divisible by 2, add '_' to the end of the string.
    str.length % 2 != 0 ? str += '_' : null;
    // create a for loop to iterate through str.
    for (let x = 0; x < str.length; x++) {
      // set up a sliding window using variable y which equates to x + 1.
      let y = x + 1;
      arr.push(`${str[x]}${str[y]}`);
      x++;
    }
    // return the array.
    return arr;
  }