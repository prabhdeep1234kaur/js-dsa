/**
 * Second largest number
 * 
 * given arr : n size : print second largest element 
 * 
 * input : [12, 34,1,19,32,1]; no : 2
 * output : 32
 *  
 * */

function calSecondLargesSol1(arr, k){
    //sort arr
    const kNew = -k;
    const sortedArr = arr.sort((a,b)=>a-b); //sort the array
    let largestNum = sortedArr.slice(kNew);
    return largestNum[0];
}
calSecondLargesSol1([3,2,1,5,6,4],2);


/**
 * 
 * rotate arr by k
 * rotale the array by k step
 * 
 * input = [1,2,3,4,5,6,7,8], k=> 3 : outut [5,6,7,8,1,2,3,4]
 * input = [-1,-100,3,99] , k=> 2 : output [3,99,-100,-1]
 */

function rotateArr(num, k){ 

    //get size of arr
    let size = num.length ;

    if(size > k){
        k = k % size; // 7 mod 3 : 1 = 7/3 : 2 : 2*3 = 6 = 7-6 = 1 : number of rotations here
    }

    const rottated = num.splice(size-k, size); //(7-3:5, 7): start from 5 and remove from 7
    //nums become : [1,2,3,4] and rotated has : [5,6,7]
    num.unshift(...rottated); //because it is an array t
    return num;
}
console.log(rotateArr([1,2,3,4,5,6,7], 3)); //[3,99,-1,-100]

//optimized : follow link for optimized solution

/**
 * 
 * Remove duplicate from sorted Array
 * given int nums arr in non-descerasing order
 * remove duplicate in-place : each element is unique
 * after remove : element order should be same
 * 
 * input [1,1,2] => [1,2,_]
 * input [0,0,1,1,1,2,2,3,3,4] = > [0,1,2,3,4,_,_,_,_,]
 * 
 * 
 * 
 */
function removeDuplicates(nums){
    //in-place : cant create new array value
    //going to compare each element with the current and next index value

    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1, 1); //remove the element if it is same and remove one element one
            i--; //as we generally move to next array but we have to check if the current element is matching with the next element
        }
    }
    return nums;
}

//without js methods
function removeDuplicates2(nums){
    
    if(nums.length === 0 ) return 0;

    //2 pointer approach
    //[0,0,1,1,1,2,2,3,3,4]
    //eg 1 point at 0 and other pointer will be for loop
    let i = 0;
    for(let j  =1 ; j < nums.length; j++){
        //iterate through arr : change the value of i, as the value of j : kind of like shifting array to top
        if(nums[i]!== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}
console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));
