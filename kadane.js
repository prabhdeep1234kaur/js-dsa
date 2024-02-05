/**
 * 
 *  given an int array, 
 * find subarr with largest sum and return the sum
 * 
 * ex
 * input : [-2,1,-3, 4,-1,2,1,-5,5] 
 * output : 6 : [4,-1,2,1]
 * 
 * input : [5,4,-1,7,8]
 * output : 23 : [5,4,-1,7,8]
 * 
 * 
 * subarray : continuous arr, even a single element can be an arr
 * 
 */

function maxArr(nums){

    let maxSum = nums[0]; //[-2,1,-3, 4,-1,2,1,-5,4] : -2
    let startIndex = 0;
    let endIndex = 0;

    for(let i = 0; i < nums.length; i++){ //RUNS FROM first index
        let currentSum  = 0; 
        for(let j = i; j < nums.length; j++){//second index  onwards : subarray
            currentSum = currentSum+nums[j]; //
            if(currentSum > maxSum){
                startIndex = i; endIndex = j;
                maxSum = currentSum;
            }
        }
    }
    return {sum: maxSum, subArray : nums.slice(startIndex,endIndex+1)};
}
console.log(maxArr([-2,1,-3, 4,-1,2,1,-5,4] ));



function maxKadane(nums){ // 
    let sum = 0;
    let max = nums[0];

    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        if(sum > max){
            max = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return max;
}
console.log(maxKadane([-2,1,-3, 4,-1,2,1,-5,4] ));


//time complexity : O(n)
//space complexity : O(1)