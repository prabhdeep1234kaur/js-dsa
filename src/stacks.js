/**
 * 
 * LIFO : last in, first out : one who enters the last, is the first to come out
 * 
 * 
 * 
 * push(e) - > inside 
 * pop -> delete
 * isEmpty -> heck is empty : last index comes out
 * peek -> see which element is on top
 * size -> how many elements
 * 
 * 
 * 
 */

//basic stack implmenetation

class stackk{
    constructor(){ //runs first : or called when object is created
        this.stack = [] ; //local variable 
    }

    push(element){
        this.stack.push(element); //adds on top of the stack
    }

    pop(){
        if(this.isEmpty()){
            return "stack is emprt";
        }else{
            this.stack.pop();
        }
    }

    peek(){ //returns top most element
        if(this.isEmpty()){
            return "stack is emprt";
        }else{
            return this.stack[this.stack.length-1];
        }
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this.stack.length;
    }
}
const myStack = new stackk();
myStack.push(1);
myStack.push(2);
//console.log(myStack);


/***
 * 
 * give an input string : rever order of the words
 * 
 * input : the sky is blue : " blus is sky the"
 * input : "  hello word  " : "word hello"
 * input : "a good    example" : "example good a"
 */

function reverseSentence(sentence){
    let stacks  = [];
    
    if(sentence === ""){
        return "";
    }

    //convert string to array 
    let arrStr = sentence.split(" ");
    
    //pushing into stacks
    for(let i of arrStr){
        stacks.push(i);
    }

    let finalStr = "";
    while (stacks.length) {
        let currentStr = stacks.pop();
        if(currentStr){
            finalStr += " " + currentStr;
        }
    }

    return finalStr.trim();
}

/***
 * 
 * string : '(', ')', '{','}', '[',']',etc
 * check if input is valid or not
 *  
 * ex : input : "()" = >true
 * input : "(){}[]" => true
 * input: "[)" => false
 * 
 * 
 * solutions : ex : "({[]})" > check each bracket and the element next to it, it should be closing bracket and push it. 
 * if not, we will remove the bracket from the stack
 * 
 */

function checkBraces(braces){
    let stack = [];
    //split to arr
    let bracesArr = braces.split("");


    for(let i = 0; i<braces.length; i++){
        let char = braces[i];
        if(char === "("||char === "["||char === "{"){
            stack.push(char);
        }else if(char === ")"||char === "}"||char === "]"){
            if(stack.length === 0){
                return false;
            }

            let top = stack.pop();
            if(
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
               ( char === "]" && top !== "[")
            ){
                return false;
            }
            
        }
    }

    return bracesArr;
}

//console.log(checkBraces("([{}])"));