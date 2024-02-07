/**
 * 
 * 
 * [8,3,5,4,7,6,1,2] => [1,2,3,4,5,6,7,8]
 * 
 * 
 */

function mergeSort(arr){ //O log n : becaise we are diving into two parts everytime
    //base case
    if(arr.length <= 1){
        return arr;
    }
    else{
        let mid = Math.floor(arr.length/2); //middle index

        let leftArr = mergeSort(arr.slice(0,mid));
        let rightArr = mergeSort(arr.slice(mid));

        return merge(leftArr, rightArr);

    }
}

function merge(leftArr, rightArr){ //O  n : becaise have while loop

    let sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift()); //removed from left arr and added to sorted array
        }else{
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}
//time complexity : o(nlogn)
//space complexity  : On
//console.log("merged "+mergeSort([8,3,5,4,7,6,1,2]));


/***
 * 
 * merge all overlapping intercals and return non overlapping intercals that cover all intervals of input
 * 
 * 
 * input = [[1,3],[2,6],[8,10],[15,18]]
 * 
 * output : [[1,6],[8,10],[15,18]]
 * 
 * 
 */

// function findInterval(arr){
//     let startI = 0;
//     let endI = 1;

//     arr.sort((a,b)=>a[startI]-b[endI]);
//     const mergedIntervals = 
// }

// console.log(findInterval( [[1,3],[2,6],[8,10],[15,18]]));