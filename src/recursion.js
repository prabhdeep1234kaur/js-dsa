//eg 1
function a(){
    return b();
}

function b(){
    return c();
}

function c(){ //base case : responsible for resolving recursion : or to stop the recursion else it will keep on running
    return true;
}

function rec(alphas){
    
    if(alphas === 3) return true;
    console.log(alphas);
    return rec(alphas + 1);
}
//console.log(rec(2));


/**
 * 
 * loop vs recursion
 */
function multLoop(arr){
    let result = 1;
    for(let i=0; i<arr.length; i++){
        result *= arr[i];
    }
    return result;
}
//console.log("result "+multLoop([1,2,3,4]));

function multRec(arr){
    console.log("result rr"+ arr);
    if(arr.length <= 0 ){
        return 1;
    } else{
        //get the last element of the array. : if length is 10, last element will be 9th eg : [9,8,7,6,5,4,3,2,1] = 9*
        return arr[arr.length - 1] * multRec(arr.slice(0, arr.length-1)); 
        //sending short array after slice to the mutRec 
    }
}
//console.log("result "+multRec([9,8,7,6,5,4,3,2,1]));


/**
 * 
 * FACTORIAL
 */
function fact(num){
    if(num < 3){
        return num
    }else{
        return num * fact(num-1);
    }
}
//console.log(fact(0));


/**
 *  
 * CREATE AN ARR WITH RANGE OF NUMBERS
 * INPUT start = 1; end  = 5 >> 
 * 
 */

function arrRange(startI, endI){
    if(endI < startI){
        return [];
    }else{
        /*
        startI, endI
        0,6
        0,5
        0,4
        0,3
        0,2
        0,1
        0,0 
        pushing endI into array 
        */
       let arr = arrRange(startI, endI-1); 
       arr.push(endI);
       return arr;
    }
}
//console.log(arrRange(0,6));


/**
 * 
 * given int : check if it is a palindrom
 * input : 121, output : true;
 * 1234 : false
 */
function isPalindrome(num) {
    const numStr = num.toString();
    
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (numStr.length === 0 || numStr.length === 1) {
        return true;
    }
    
    // Compare the first and last characters
    if (numStr[0] !== numStr[numStr.length - 1]) {
        return false;
    }
    
    // Recursively check the substring excluding the first and last characters
    return isPalindrome(numStr.slice(1, -1));
}

//console.log(isPalindrome(313));

/**
 * 
 * 
 * Fibonacci series : 0,1,1,2,3,5,8,13,21,34
 * input n = 8, output  0,1,1,2,3,5,8,13
 * 
 * print series after 
 * 
 */

function fibonacci(n, a = 0, b = 1, series = []) {
    if (n === 0) {
        return series;
    }
    series.push(a);
    return fibonacci(n - 1, b, a + b, series);
}

// Example usage: Get Fibonacci series up to the 8th term as an array
const fibSeries = fibonacci(8);
//console.log(fibSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13]


/**
 * 
 * rever a string
 * input : hello => olleh
 */

function reverSTR (str){
    if(str === ""){ return "";}
    else {  
        return reverSTR(str.substr(1)) + str.charAt(0);
    }
}
//console.log(reverSTR("hello"));

/***
 * 
 * subsets : backtracking algo using recursion
 * int array unique : return all posible subsets
 * no duplicate in solution subset : but any order is ok
 * 
 * input : [1,2,3] > [[],[1],[2],[1,2],[1,3],[2,3],[1,2,3],[3]]
 * 
 * output : [0] = > [[], [0]]
 * 
 * 
 * approach : take two empty arrays
 * a subset can either include 1 or not, 2 or not, 3 or not
 * so, two calls : one call to include the no. and second to not include the no.\
 * 
 *                [recursive call]
 *                     /take 1                       \ not take 1
 *                     [1]                           [] 
 *           take 2  /   \ not take 2                 /   \not taking 2
 *             [1,2]   [1]                         [2]   []
 *                  
 *  */

function returnSubsets(arr){
        let result = [];
        let temp = []; //temp element and then keep on changing it

        function rescursiveSubset(arr, i){ //starting from 0
            if(i === arr.length){ //reaches the end
                return result.push([...temp]); 
            }

            //either take an element or not
            //lets say for the 0th element > i 

            temp.push(arr[i]); //taking 
            rescursiveSubset(arr, i+1);//moving to second element

            //not going to take
            temp.pop(); //not taking
            rescursiveSubset(arr, i+1); //moving to second element
        }

        rescursiveSubset(arr, 0);
        return result 
}
//console.log(returnSubsets([1,2,3] ));
