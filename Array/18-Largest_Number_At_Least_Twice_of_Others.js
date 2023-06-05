/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 > max && nums[i] !== max) {
            return -1;
        }
    }

    return nums.indexOf(max);
};