/***
 * 
 * BUBBLE SORT
 * 
 * sort into ascending array 
 *  
 * [29,5,10,4,2,0,43];
 * 
 */


function bubbleSort(arr){  
    for(let i=0; i<arr.length; i++){//run n times
        
        for(let j = 0; j < arr.length - 1 ; j ++){ //run n times
            
            if(arr[j] > arr[j+1]){
                [ arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr; 

}

//best time complexity : O(n)
//worst time complexity : O(n^2)
//avg time complexity : O(n^2) : O(n/2)*n = O(n^2)

//space complexity : O(1)
//console.log(bubbleSort([29,5,10,4,2,0,43]));


/**
 * 
 * SELECTION SORT
 * 
 * find the smalled and push it to the front of the array
 * 
 */







function selectionSort(arr){

    for(let i=0; i<arr.length-1; i++){//run n times
        let minIndex = i;
        for(let j = i+1; j < arr.length; j ++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;

}
//console.log(selectionSort([29,5,10,4,2,0,43]));
