/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    Additionally, if the number is negative, return 0.
    Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    // declare sum variable. will be used to output the desired sum.
    let sum = 0;
    // loop from 0 to the value of number. if the value of i is a modulous of 3 or 5, add it to the value of the sum variable.
    for (var i = 0; i < number; i++) { i % 3 == 0 || i % 5 == 0 ? sum += i : null }
    // return the value of the sum variable.
    return sum;
   }
