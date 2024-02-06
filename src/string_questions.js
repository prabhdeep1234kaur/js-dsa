/**
 * 
 * truncat text
 * function that checks length of given strength and if it surpases a specific max length, maxlength.. 
 * replace the end of string with "..." so length mataches the max length
 *  
 * input : "Hello my name is PRabhdeep KAur, this is DS"
 * output : "Hello my..."
 */

function truncateSTR(str, maxlength){
    if(str.length <= maxlength){
        return str;
    }else{
       return str.slice(0, maxlength)+"...";
    }
}
//console.log(truncateSTR("Hello my name is PRabhdeep KAur, this is DS", 9));


/**
 * 
 * palindrom no : 
 * check if no. is palindrome?
 * 
 * xx = 121 : true
 * zz = 1234 : false
 *
 * 
 */
function isPalindrome(str){
    //convert to array
    arr = str.toString().split("");

    //reverse the array // reverse, convert to string , convert to int (using +)
    newArr = +arr.reverse(arr).join("");
    if(newArr === str){
        return true;
    }else{
        return false;
    }
}


/***
 * 
 * Hamming distance
 * two string given, x and y, return the hamming distance between them
 * 
 * input x = "hello", y="hwllr"
 * output : 2
 * 
 * explaination : "tanya", "maaaa" > 3
 * 
 */


function checkHamming(x,y){
    if(x.length !== y.length){
        return false;
    }
    else{
        let hammingVal = 0;

        for(let i=0; i<=x.length;i++){
            if(x[i]!==y[i]){
                hammingVal++;
            }
        }
        return hammingVal;
    }
}

//console.log(checkHamming("tanya", "maaaa"));

//for bits

function checkHammingBinary(x,y){
    //convert to binary ex; 10 or 1001
    x = x.toString(2); 
    y = y.toString(2);
    /*if either of them is just 
    two or less binary digits, 
    add 0s in front of them till on of them matches the length
    */
    if(x.length < y.length){ 
        while(x.length !== y.length){
            x = "0"+x; 
        }
    }else{
        while(x.length !== y.length){
            y = "0"+y; 
        }
    }
    
    let hammingVal = 0;

    for(let i=0; i<=x.length;i++){
        if(x[i]!==y[i]){
            hammingVal++;
        }
    }
    return hammingVal;
    
}

/**
 * 
 * valid anagram : 
 * 
 * anagram : can make a different phrase suing exact words
 * 
 * eg : input : cat & rats : no
 * 
 * input : Dictionary and indicatory
 * 
 */


function checkAnagram(str1, str2){
    //create arr => sort=>back to string=> match
    str1ArrStr = str1.toLowerCase().split("").sort().join("");
    str2ArrStr = str2.toLowerCase().split("").sort().join("");

    if(str1ArrStr===str2ArrStr){
        return true;
    }else{
        return false;
    }
}

function checkAnagramOptimized(str1, str2){
    if(str1.length !==str2.length){
        return true;
    }

    let obj1 = {}; let obj2 = {};

    for(let i=0; i<str1.length; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for(const key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(checkAnagramOptimized("Dictionary","s"));