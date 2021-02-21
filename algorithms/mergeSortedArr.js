/*

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
The number of elements initialized in nums1 and nums2 are m and n respectively. 
You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

*/ 

const mergedArrays = (nums1,m, nums2, n) =>{
	let firstPointer = m - 1;
	let secondPointer = n - 1;
	for(let i = m + n - 1; i >= 0; i--){
		if(secondPointer < 0){
			break;
		}if(nums1[firstPointer] > nums2[secondPointer]){
			nums1[i] = nums1[firstPointer]
			firstPointer--
		} else{
			nums1[i] = nums2[secondPointer]
			secondPointer--
		}
	}
	console.log(nums1)
	return nums1;
}

let m = 3;
let n = 3;
mergedArrays([1,2,3,0,0,0], m,[2,5,6],n)