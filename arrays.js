/*******arrays : declaration?*******/
let arr  = new Array();
let arr2 = [] ; //most common

//add?
let arr3 = ['a','b','c'];

//access them?
//console.log(arr3[0]);

//indexing? starts from 0
//console.log(arr3[2]);

//what else can we add?
//object? 
let person = {name:"person",age:20};
let arrOBJ = ["a","b",person];


//count no.of elements?
//console.log(arrOBJ.length);


/*******methods to add and remove?*******/
//1.PUSH :  add into the end : like stack
arrOBJ.push(person);
//console.log(arrOBJ);
//2. POP : remove from the end: like stack
arrOBJ.pop();
arrOBJ.pop(); //removes last two values because ran twice

//3. unshift : add to the top : 
arrOBJ.unshift(person)
////console.log(arrOBJ);

//4. shift : remove from the top : eg queue 
arrOBJ.shift(person)
//console.log(arrOBJ);




/*******LOOPS?*******/
//FOR LOOP

for(let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}

//while LOOP
let i = 0;
while(i < arr3.length){
    console.log(arr3[i]);
    i++;
}

//INBUILT LOOP
const numbers = [1,2,3,42,2,4]; //[1,2,2,3,4,42]
//1. maps  : kind of like while loop?
const newNums = numbers.map( function (item, index, array){//callback function
    return item+5;//added +5 to every element
});


//2. filter : takes a condition : like for loop if an if inside
const newNums2 = numbers.filter( function (item, index, array){//callback function
    return item>3;//any item more than 3
});

//3. reduce : takes 4 args
const newNums3 = numbers.reduce( function (prev, currentItem, index, array){//callback function
    //prev : first index , (only if no intitial value)
    return prev + currentItem ; //gave the sumn of all values
}, 3);
//console.log("bum"+newNums3);

//4. some : returns true or false
const newNums4 = numbers.some( function (item, index, array){//callback function
    return item>100;//any item more than 3
});
//console.log(newNums4);

//5. every check for every single elemebnt if condn is satifies
const newNums5 = numbers.every(function (item, index, array){
    return item <10;//as not every item is less than 10
});


//6. looping function : returns when the value is satified and  returns the first value that satifies the condition
const newNums6 = numbers.find(function (item, index, array){
    return item >1;
});
//console.log(newNums6);


/********* REST abnd SPREAD operations **********/

const numbs = [1,2,3,42,2,4];
const numbs2 = [6,7,8,9,0,11];

//adding two arrays together 
const finalNumbs  = [numbs, numbs2]; 
//console.log(finalNumbs); //[[1,2,3,42,2,4],[6,7,8,9,0,11]]

//SPREAD : expands an array and gives combined but works only for arrays
const finalNumbs2  = [...numbs, ...numbs2]; 
//console.log(finalNumbs2); //[1, 2, 3, 42, 2, 4, 6, 7, 8, 9, 0, 11]

//REST : receive elements in the form of one single array when being passed to a function
function sums(...numbers){
    return numbers; //[Array(6), Array(6), 5, 'hello']
}




/********* OTHER FUNCTIONS **********/

//concat combines arrays : does not mutate the exisitng array but returns a new array : but works for other type of inputs too,
const conCatNum = numbs.concat(numbs2);
//console.log(conCatNum); //[1, 2, 3, 42, 2, 4, 6, 7, 8, 9, 0, 11]


//slice : want to access certain part of the arr eg get first two part
const newSlice = numbs.slice(0,2) ; //0 to n-1
//const newSlice = numbs.slice(-2); //-1 : element from the last
//console.log(newSlice); //return 1, 2


//splice : updates arr : start, how many to delete and new element to add
numbs.splice(1, 2, 90) ; 
//console.log("numbs"+numbs); //[1,90,42,2,4]


//fill : replce every with whatever we provide
const fillArr = numbs2.fill(9);
//console.log("fillArr "+fillArr); //9,9,9,9,9,9


const fillArr2 = numbs2.fill(2, 9);
//console.log("fillArr2 "+fillArr2); //9,9,9,9,9,9

//findIndex : return index of the first element : else return -1
const findIndexNumbs = numbs.findIndex((item)=>item==2);
console.log(findIndexNumbs);


//flat 
const nextedArr = [1,[2,3],[[4,5],9]];
console.log(nextedArr.flat()); //flatted to one level
console.log(nextedArr.flat(2));//flattened to 2 level[1, 2, 3, 4, 5, 9]


//reverse
numbs.reverse();
//console.log(numbs);//[4, 2, 42, 90, 1]


//sort
const unsorted = [3,5,2,4,6,299,31,4,5,4335];
//unsorted.sort(); console.log(unsorted);//[2, 299, 3, 31, 4, 4, 4335, 5, 5, 6]
unsorted.sort((a,b)=>a-b); console.log(unsorted);// [2, 3, 4, 4, 5, 5, 6, 31, 299, 4335] : ascending order
//unsorted.sort((a,b)=>(b-a));console.log(unsorted);// descending order


