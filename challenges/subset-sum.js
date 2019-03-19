/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(arr, target) {
    let i, j, temp
    let result = []
    let arrLen = arr.length
    let power = Math.pow
    let combinations = power(2, arrLen)
    
    for (i = 0; i < combinations;  i++) {
      temp = []
      for (j = 0; j < arrLen; j++) {
        
        if ((i & power(2, j))) {
            temp.push(arr[j])
        }
      }
      console.log(temp)
      
      if (temp.length) {
        let tempSum = temp.reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0);

        console.log(tempSum)

        if (tempSum === target) {
          console.log(temp)
          return true;
        }
      }
      result.push(temp)
    }
    console.log(result)
    return false
}

// function subsetSum(array, target) {
//   // 1st base case: if target has been reduced to 0, return true (subset that adds up to sum has been found)
//   if (!target) return true;
//   // 2nd base case: if array is empty return false (depleted all elements in array without getting to sum)
//   if (!array.length) return false;    
//   // Split recursion, either counting or not counting the first value
//   return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
// }
module.exports = subsetSum;
