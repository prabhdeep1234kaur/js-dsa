/**
 * 1. Palindrome no. : 121, 1221, 2002, 11011
    question : check palindrome or not
*/

function isPalindrome(x){


    // if(x<0){
    //     return false;
    // }

    //check if it same when it is reverse
    //ex 121 : convert to string, because we have funcs to reverse string
    //split() : whatever we put in split, it will convert it into arry by that no.eg, split(2) = ["1","1"]
    //reverse() : reverses array inplace : exists arr is reverse
    //join() : like split, we need somthing to join it
    //+ : convert it into a number to compare it into the value we received
    //if(x<0){  return false;}
    return x < 0 ? false: x === +x.toString().split("").reverse("").join(""); //["1","2","1"] => ["1","2","1"];
}
console.log("PalinDrome? "+isPalindrome(321));


/***
 * 2. Fibonaaci no. : 0,1,1,2,3,5,8,13,21,34...
    Either uses recurrsion ? or lets see by simple js
    n1, n1, n1+n1=n2, n2+n1 =3,
    0 = 0, 1 = 1
    f(n) = f(n-1),
    5 : (5-1)+(5-2) , 
    input 3 : out 2
    print fibonacci series till given no.
 */

function fibonaaci(x){
    //x is the position till we want the no to, i is fibonacci no.
    const arr =  [0,1]; //static values into that array
    for(let i = 2 ; i <= x; i++){ //it starts from 2 : so whatever the no. is make it's index - 1, -2, -3 gradually
        arr.push(arr[i-1] + arr[i-2]); 
    }
    return arr;
}

console.log("prev no. "+fibonaaci(10));

//using recurssion:

function fibonaaciRec(x){
    const arr =  [0,1]; 
    if(x!=1 && x!= 0){
        return fibonaaciRec(x-1) + fibonaaciRec(x-2);
    }else{
        return x;
    }
    
}
console.log(fibonaaciRec(6));


/***
 * 
 * 3. Valid Anagram?? 
    Anargram is a word : new word by re-arranging
    ex: Brush : shrub
    Apple Macintosh : laptop machines
*/


function isAnagram(s, t){
    //take first no. : brush. take other no. : shrub
    //sort them : if same sort : then compare
    s = s.split("").sort().join(""); //creates array // [ "b","r","u","s","h"]=> [b,h,r,s,u] => bhrsu
    t = t.split("").sort().join(""); //["s","h","r","u","b"] = [s,h,r,u,b] = bhrsu

    return s===t;
}
//using objects
function isAnagramOther(s, t){
    //base case : if not same length : evident
    if(s.length !== t.length) return false;

    let objt1 = {}; 
    let objt2 = {};

    //map the no. of occurences of each alphabet from both the words
    for(let i= 0; i<s.length; i++){
        //taking whatever character and marking it as apearing no. of times it comes
        //for example if one character is repeating, we will add + 1 to it. : a appears twice? : 1 and again add +1 to it
        // 0 to initialize it : word : att  =  {"t":2,"a":1}
        
        objt1[s[i]] = (objt1[s[i]] || 0) + 1; 
        objt2[t[i]] = (objt2[t[i]] || 0) + 1;
    }

    //foreachloop through the object
    for(const key in objt1){
        if(objt1[key] !== objt2[key]){ //matching if "alphabet" key doesn't exist then we will return false : means no alpha found
            return false; 
        }
    }
    return true;
}
console.log(isAnagramOther("rat","car"));


/**
 * BRUTE FORCE SOLUTION : ADDing all the solutions to create a solution
 * 4. TWO SUM
 * Given array of integers and an integer
 * find the two values that add up and make that ineger
 * ex : [2,3,4,5] target int : 8 : find two values that make an 8
 */

//brute force solution
function twoSumBrute(arr, target){

    /* no of solutions it can have : 
    eg [3,2,4] = 3+2,2+4,4+3, target is 6
    [2,7,11,15] : first roop will watch 2 with everyone and second loop will check 7 with everyone
    */
    for(let i = 0; i<arr.length; i++){ // running throught first no eg 2
        for(let j = i+1; j < arr.length; j++ ){ //moves to the next no. 
            //add both i and j
            if(arr[i]+ arr[j] === target) return [i,j];
        }
    }
}

//using js objects
/*
we have object here : obj, which will have the following logic working
for loop : we will get n > current value for example : 2, target = 13
"2" : target - 2 : (13-2) = 11 : does it exists, yes : 0 = put and return inside the object
"7" : target - 7 : (13-7) = 6 : does it exists , no : 1 : just put inside object
"11" : target - 11 : 13-11 = 2 : does it exists, yes : 2 = put and return inside object
"15" : target  - 15 : 13-15 = -2 : not : just inside object
returned object has 0 and 2
*/
function twoSum(arr, target){
    var obj = {};
    for(let i = 0; i<arr.length; i++){
        var n = arr[i];
        if(obj[target - n] >= 0){
            return [obj[target-n],i];
        }else{
            obj[n] = i;
        }
    }
}
console.log(twoSum([1,2,3,4,5,6],5));

/***
 * 5. BEST TIME TO BUY AND SELL STOCKSS : BRUTE FORCE SOLUTION
 * price given of stock  for buying: index are the days : input : prices [7,1,5,3,6,4] = > 5$profit
 * We have to find the maximum profit we can gain from selling the stocks
 * [monday = buying [7$] = selling[7$]]
 * [tues = buying [1$] = selling[1$]]
 * [wed = buying [5$] = selling[5$]]
 * [thurs = buying [3$] = selling[3$]]
 * [friday = buying [6$] = selling[6$]]
 * [Saturday = buying [4$] = selling[4$]]
 * can't sell and buy in dates of past, like bought friday and selling it on tuesday? not possible
 * 
 */
function maxProfitBrute(prices){
    let globalProfit = 0;
    for(let i = 0; i < prices.length-1; i++){ //-1 because, we have nothing after last element.
        for(let j = 1+1; j < prices.length; j++){ //+1, because we have to goto next elemnt
            const currentProfit = prices[j] - prices[i]; //find the profile by subtracting the values
            if(currentProfit > globalProfit){
                globalProfit = currentProfit;
            }
        }
    }
    return globalProfit;
}
console.log(maxProfitBrute([7,6,4,3,1]));


/***
 * GREEDY ALGORITHM
 * 
 * Calcu soln with whatever we have right now
 * replacing min value is new values making it greeeeedy
 */

function maxProfit(){
    //[7,1,5,3,6,4]
    //mini stock = 0th index = 7
    //profit = 0
    //next index value : if it is less than 0th index,  we replace mini with next index value
    //next value : if value is more, than not updating

    //eg = min = 7, next is => so, min=1: profit ? 1-7 : -6 = 0
    //value = 5

}



