/**
 * 
 * implement binary search
 * 
 * 
 */

/**
 * 
 * array of num: asc order :with int target
 * 
 * find index of the target.return index or -1if not found
 * 
 * complexity : O(log n) 
 * 
 * 
 */

function searchB(nums, target){
    let startI = 0; 
    let endI = nums.length - 1;

    while(startI <= endI){
        let midI = Math.floor((startI + endI) / 2);


        if(nums[midI] < target){ //move start to middle
            startI = midI + 1;
        }else if(nums[midI] > target){
            endI = midI - 1;
            
        }else{ //midI > target // move end to middle
            return midI;
        }
    }

    return -1;
}

//console.log(searchB([-1,0,3,4,5,9,12], 9));


/***
 * 
 * 
 * given arr non sorted : [-2,-1,-1,1,2,3] 
 * find the no. of positives and no. of negative ints and return the max out of it
 * example is positive numers is 3, and negatives are 5 , return 5
 * 
 * 
 */

function findInts(nums){
   return Math.max(upperB(nums), lowerB(nums));
}

//for positive :
//[-2,-1,-1,1,2,3]  : low 0; high = 5
function upperB(arr){
    let low = 0; let high = arr.length-1;

    while(low < high){
        //0+5/2 = 2.4 = 2
        let mid = Math.ceil((low+high)/2); //lower end of float : because we are searching the right most -ve no.
        
        if(arr[mid] > 0) {
            high = mid-1; //found negative
        }else{
            low = mid; //found positive
        }
    }

    return arr[0] >= 0 ? 0 : low + 1;
}

//for negatives
function lowerB(arr){
    let low = 0; let high = arr.length-1;

    while(low < high){
        let mid = Math.floor((low+high)/2); //
        
        if(arr[mid] < 0) {
            low = mid + 1; //found negative
        }else{
            high = mid; //found positive
        }
    }

    return arr[arr.length -1 ] <= 0 ? 0 : arr.length - low; //no positive found so returning 0  else returning positive
}

console.log(findInts([-4,-2,-1,-1,1,2,4]));