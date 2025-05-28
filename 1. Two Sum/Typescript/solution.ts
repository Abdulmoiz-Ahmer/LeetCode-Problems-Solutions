function twoSum(nums: number[], target: number): number[] {
  const numToIndexFiling = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (numToIndexFiling.has(diff)) {
      return [numToIndexFiling.get(diff), i];
    }

    numToIndexFiling.set(nums[i], i);
  }
}
