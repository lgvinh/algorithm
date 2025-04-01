// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */
class Solution {
  static subarraySum(arr, target) {
    let left = 0;
    let right = -1;
    let sum = 0;
    let output = [-1];

    while (right < arr.length) {
      if (sum === target) {
        output = [left + 1, right + 1];
        break;
      } else if (sum > target) {
        sum -= arr[left];
        left += 1;
      } else {
        right += 1;
        sum += arr[right];
      }
    }
    return output;
  }
}

console.log(Solution.subarraySum([1, 2, 3, 7, 5], 12)); // [2, 4]
console.log(Solution.subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)); // [1, 5]
console.log(Solution.subarraySum([19, 23, 15, 6, 6, 2, 28, 2], 2)); // [6, 6]
console.log(Solution.subarraySum([5, 1, 24, 15, 12, 41, 1], 5)); // [1, 1]
