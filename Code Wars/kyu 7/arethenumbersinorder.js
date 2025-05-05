/*

Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array. 

*/

function inAscOrder(arr) {
    // set a flag variable to determine if an array is in ascending order.
    let bool = true;
    // start a for loop to iterate through the array.
    for (let i = 0; i < arr.length; i++) {
      // set variable j to start a sliding window.
      let j = i + 1;
      // create a operator that checks if arr[i] is greater than arr[j].
        // if arr[i] is greater than arr[j] set bool flag to false determining that the array is not in order.
      arr[i] > arr[j] ? bool = false : null;
    }
    return bool;
  }