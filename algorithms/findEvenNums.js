/*
Given an array nums of integers, return how many of them contain an even number of digits.
Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

*/ 

// var findNumbers = function(nums){
// 	let total = 0;
// 	for(let i=0; i<nums.length;i++){
// 		let stringNumber = String(nums[i]);
// 		if(stringNumber.length % 2 == 0){
// 			console.log(total++)
// 		}else{
// 			console.log('its a odd number')
// 		}
// 	}
// 	console.log(total);
// 	return total
// }

//findNumbers([9999,12,345,2,6,7896,111111])

const findNumsFaster = (nums) =>{
	let total = 0;
	for(let i =0; i<nums.length;i++){
		let stringNums = String(nums[i]);
		total += stringNums.length % 2 == 0
	}
	console.log(total)
	return total;
}

findNumsFaster([111,1111,23424,345522,335452,32,23,23,23,23])