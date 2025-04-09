/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arr = nums.concat().sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) {
      return result
    }

    while (i !== 0 && arr[i] === arr[i-1]) {
      i++;
    }

    const target = 0 - arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;

        while (arr[left] === arr[left-1]) {
          left++
        }

        while (arr[right] === arr[right+1]) {
          right--;
        }
      }
    }
  }

  return result;
};
