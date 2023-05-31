/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    
    for (num of nums) {
        num = num.toString()
        if (num.length % 2 === 0) {
            count++
        }
    }
    return count
};