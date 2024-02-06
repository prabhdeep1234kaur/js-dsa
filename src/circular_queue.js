/***
 * 
 * Like a queue
 * front ----- rear
 * 
 * fifo : first in first out
 * 
 * 
 * enqueue (elem) : adding element in the queque : from end
 * dequeue() : deleting the element from the queue : from top
 * peek() : front() : element AT THE FRONT OF THE QUEUE
 * isEmpty() : checks empty or not
 * size() : 
 * 
 * 
 */

class Queue{
    constructor(){ //initialize variable inside a class
        this.items = []; //properites of the class // queue ds
    }

    enqueue(ele){
        this.items.push(ele); //back of the queue
    }

    dequeue(){
        if(this.isEmpty()){
            return "Empty !!";
        }
        this.items.shift();
    }

    isEmpty(){
        this.items.length === 0;
    }

    front(){ 
        if(this.isEmpty()){
            return "empty hai";
        }
        else{
            return this.items[0];
        }
    }

    printQueue(){
        return this.items.toString();
    }
}

let myQueue = new Queue();
myQueue.enqueue(6);
myQueue.enqueue(62);
myQueue.enqueue(63);
myQueue.dequeue();

//console.log(myQueue.printQueue());


/**
 * 
 * circular queue implementation : not dynamic has a fixed size. 
 * 
 * FIFO bit last position is connected back to the first position to make a circle
 * 
 */

var myCircleQueue = function (k) {
    this.queue = [] ; //
    this.size = k;

}

myCircleQueue.prototype.enQueue = function(value){
    if(this.size === this.queue.length){
        return "Queue is filled";
    }
    this.queue.push(value); return true;
}

myCircleQueue.prototype.deQueue = function(){
    if(this.queue.length === 0){
        return "Queue is empty";
    }
    this.queue.shift();
}

myCircleQueue.prototype.Front = function(){ //peek the first index
    if(this.queue.length === 0){
        return "Queue is empty";
    }
    return this.queue[0];
}

myCircleQueue.prototype.Rear = function(){ //peek the last index
    if(this.queue.length === 0){
        return "Queue is empty";
    }
    return this.queue[this.queue.length-1];
}


myCircleQueue.prototype.isEmpty = function(){
    return this.queue.length === 0;
}


myCircleQueue.prototype.isFull = function(){
    return this.size === this.queue.length;
}


var obj = new myCircleQueue(3);
obj.enQueue(1);
obj.enQueue(3);
obj.enQueue(31);
obj.deQueue();
obj.enQueue(11);//this won't go inside because size is 3
obj.deQueue();
obj.enQueue(321);
//console.log(obj.Front(), obj.Rear());

/**
 * 
 * Implement stack using queues
 * implement : last in first out (LIFO) using only two queues
 * support all function push, pop, top, empty
 * 
 */

// var MyStack = function (){
//     this.q1 = [];this.q2 = [];
// };

// myStack.prototype.push = function(ele){
//     while(this.q1.length !== 0){
//         this.q2.push(this.q1.shift());
//     }
//     this.q1.push(ele); return true;
// };
// myStack.prototype.pop = function(){

// };
// myStack.prototype.peek = function(){ //return the last index in stack and first in queue

// };
// myStack.prototype.isEmpty = function(){ //

// };

// //const myObtQueue = new MyStack();