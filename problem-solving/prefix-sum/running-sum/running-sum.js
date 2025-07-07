function runningSum(nums) {
  const result = [];

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    result.push(leftSum + nums[i]);

    leftSum += nums[i];
  }

  return result;
}

module.exports = { runningSum };
