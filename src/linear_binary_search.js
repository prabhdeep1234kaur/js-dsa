/**
 * 
 * LINEAR SEARCH : Simple searching straight
 * 
 * 
 */

/**
 * 
 * Ques : Implement linear search in JS
 * 
 * seach target in nums. if it does : return index
 * otherwise return -1
 * 
 * Write with algo O(n) 
 * 
 * input nums = [4,5,7,3,1,4,6,3] target = 4 : out 6, if target = 0 , output : -1 
 * 
 */

function searchTarget(nums, target){

    for(let i=0; i<nums.length; i++){
        
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}
//nums.length time : 7 is time complexity : O(n)
//space complexity : O(1)
//console.log(searchTarget([41,5,7,3,1,4,6,3], 4));


/**
 * 
 * GLOBAL LINEAR SEARCH
 * 
 * 
 */

/***
 * 
 * 
 * Let's say there are same values in an array and we want value of all those indexes
 * 
 * 
 * 
 */
function globalSearchTarget(nums, target){

    const indexesArr = [];
    for(let i=0; i<nums.length; i++){
        
        if(nums[i] === target){
           indexesArr.push(i);
        }
    }
    if(indexesArr.length === 0) return -1;
    return indexesArr;
}
//nums.length time : 7 is time complexity : O(n)
//space complexity : O(n) because we have an array
//console.log(globalSearchTarget([4,5,7,3,1,4,6,3], 4));



/***
 * 
 * 
 * find kth missing +ve no.
 * given arr : [2,3,4,7,11], missing kth is 5
 * 
 * find the value of 5th element that should have been if the array was like [1,2,3,4,5,6,7,8,9,10,11]
 *  
 * missing element : [1,5,6,8,9,10,12,13]
 * 
 * output should be 9
 * 
 */
function findMyelement(arr, k){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
       if( arr[i] <= k+count){
        count++;
       }
    }
    return count;
}

//console.log(findMyelement([2,3,4,7,11], 5));

