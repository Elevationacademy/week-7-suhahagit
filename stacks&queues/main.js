
//Stacks & Queues
//ex1
class Queue{
    constructor(){
        this.queue = []
        this.length = 0
    }
    enqueue(item){
        this.queue.unshift(item)
        this.length++
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queue[this.length - 1]
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            this.length--
            const queued = this.queue[0]
            this.queue.splice(0, 1)
            return queued
        }
    }
    isEmpty(){
        return (this.length === 0)
    }
    print(){
        console.log(this.queue)
    }
}

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true