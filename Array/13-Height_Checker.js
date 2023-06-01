/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const origin = [...heights];
    heights.sort((a, b) => a - b);
    let ret = 0;
    for (let i = 0; i < origin.length; ++i) {
        origin[i] !== heights[i] && ++ret;
    }
    return ret;
};