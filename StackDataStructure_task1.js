class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  length() {
    return this.stack.length;
  }
  search(item) {
    return this.stack.indexOf(item);
  }
  isEmpty() {
    return !this.stack.length;
  }
  print() {
    return this.stack;
  }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

console.log(stack1.print());