/***
 * 
 * 
 * quick sort example
 * 
 * arr : [5,2,9,3,6,8,7]
 * 
 * 
 */


function quickSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = []; 
    const right = [];

    for(let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}
//console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));


/***
 * 
 * array: [5,3,2,1]
 * 
 * output : [1,2,3,5]
 * 
 * vale of 2 and 3 are not changed
 * 
 */

function sortArray(arr){
    if(arr.length <=1){
        return arr;
    }

    let left =[]; let right=[];
    let pivot = arr[0] ; //5

    for(let i=1; i<arr.length; i++){

        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        if(arr[i] > pivot){
            right.push(arr[i]);
        }
    }

    return [...sortArray(left), pivot, ...sortArray(right)];
}

//console.log(sortArray([5,2,3,1]));


/**
 * 
 * More efficient way of solving quick sort
 * 
 * arr = [3,-2,-1,0,2,4,1];
 * i   
 * 3 : j ; i
 * -2 :0: j
 * -1 :
 * 11
 * 24
 * 0
 * 2
 * 4
 * 10 : right : pivot
 * mew after first swap
 * -2 : 
 * 3 : i
 * -1 : j
 * 11 :
 * 24
 * 0
 * 2
 * 4
 * 10 : right : pivot
 */


function findPartition(arr, l, r){
    let pivot = r;
    let i = l-1;
    for(let j=l; j<r; j++){
        if(arr[j] < arr[pivot]){
            i+=1; //i reached to j-1 's place : like step back
            //as it is less than pivot : lets swap it with j:incremented : swap -2 and 3

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    //now to once it is sorted, we need to put last element : pivot in middle
    let temp = arr[i+1]; //right's last element to be replace by right most
    arr[i+1] = arr[r];
    arr[r] = temp;

    //this is the partitioned value 
    return i+1;
}


function qs(arr, left, right){
    if(left >= right){
        return; //alsready sorted or empty
    }

    let pivot = findPartition(arr, left, right);
    //because pivots value will keep on updating using the partition's function : we will see two arrays left arr > P < right arr
    qs(arr, left, pivot-1);
    qs(arr, pivot+1, right);
}

function sorted(arr){
     qs(arr, 0, arr.length-1);
     return arr;
}

console.log(sorted([5,2,6,3,7]));