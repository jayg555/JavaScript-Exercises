/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:

Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

*/ 

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
	let sum = 0;
    for(let i=0; i < nums.length; i++){
		
        if(nums[i] == 1){
		sum++;
		max = Math.max(sum,max)
        }else{
         sum = 0;
        }
    }
	console.log(max)
    return max;
};

findMaxConsecutiveOnes([1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0])