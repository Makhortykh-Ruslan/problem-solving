function intersection(nums1, nums2) {
  const seen = new Set(nums1);
  const result = new Set();

  for (let el of nums2) {
    if (seen.has(el)) result.add(el);
  }

  return Array.from(result);
}

module.exports = { intersection };
