/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const parts = nums.join('').split('0');
    let count = 0;
    parts.forEach(section => {
        if (section.length > count) {
            count = section.length;
        }
    });
   return count;
};