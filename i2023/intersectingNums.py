"""
Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
Note:
    Each element in the result must be unique.
    The result can be in any order.
"""

def intersectingNums(nums1, nums2):
    # Convert both arrays to sets
    set1 = set(nums1)
    set2 = set(nums2)
    
    # Find the intersection of the sets
    intersection = set1.intersection(set2)
    
    return list(intersection)

print(intersectingNums([1,2,2,1], [2, 2])) #[2]
print(intersectingNums([4,9,5], [9,4,9,8,4])) #[9,4]