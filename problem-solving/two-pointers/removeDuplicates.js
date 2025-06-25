function removeDuplicates(nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }

  return left + 1;
}

console.log(removeDuplicates([1, 1, 2]));
/**
 Input: nums = [1,1,2]
 Output: 2 // бо масив стає [1,2,_]

 **/

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/**
 Input: nums = [0,0,1,1,1,2,2,3,3,4]
 Output: 5 // бо масив стає [0,1,2,3,4,_,_,_,_,_]

 **/
