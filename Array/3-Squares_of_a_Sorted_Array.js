/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((ele) => {
          return ele*ele
      }).sort((a,b) => {
          return a-b
      })
};