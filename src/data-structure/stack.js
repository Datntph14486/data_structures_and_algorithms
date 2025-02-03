class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        return this.stack.push(item);
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        }
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }
}
