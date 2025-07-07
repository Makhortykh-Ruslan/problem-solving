function pivotIndex(nums) {
  const totalSum = nums.reduce((acc, el) => (acc += el), 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];

    if (rightSum === leftSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
}

module.exports = { pivotIndex };
