const twoSum = (nums: number[], target: number): number[] => {
  // Hash Map
  // Iterate through the nums
  // Check if compliment is in hash
  // If so return current index and hash value index
  // Add existing numbers to hash
  const hash: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (hash[comp] !== undefined) {
      return [hash[comp], i];
    }
    hash[nums[i]] = i;
  }
  throw new Error("No two elements sum to target.");
};