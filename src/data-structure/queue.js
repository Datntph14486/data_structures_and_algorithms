class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    //adds a new element
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    // remove an element from head of the queue
    dequeue() {
        let removeElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removeElement;
    }

    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }

    //checks if queue is empty or not
    isEmpty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        } else {
            return false;
        }
    }

    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
