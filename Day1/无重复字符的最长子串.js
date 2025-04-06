/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 目测通过滑动窗口进行解答
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();

  for (;right<s.length; right++) {
    const cur = s[right];
    const index = map.has(cur) ? map.get(cur) : -1;
    if (left <= index) {
      left = index + 1;
    }
    map.set(cur, right)
    max = Math.max(max, right - left + 1);
  }

  return max;
};
/*  2025/04/06挑战成功 */