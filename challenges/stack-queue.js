/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  return this.index;
};

Stack.prototype.pop = function() {
  const output = this.storage[--this.index];
  delete this.storage[this.index];
  return output;
};

/**
 * Queue Class
 */

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.in.push(value);
  return this.in.index + this.out.index;
};

Queue.prototype.dequeue = function(value) {
  if (this.out.index > 0) return this.out.pop();
  while (this.in.index > 1) {
    this.out.push(this.in.pop());
  }
  return this.in.pop();
};

// ALTERNATIVE

function Stack() {
  this.values = {};
  this.size = 0;
}

Stack.prototype.push = function(value) {
  this.values[this.size] = value;
  this.size += 1;
};

Stack.prototype.pop = function(value) {
  if (this.size > 0) {
    let temp = this.values[this.size - 1];
    delete this.values[this.size - 1];
    this.size -= 1;
    return temp;
  } else {
    return undefined;
  }
};

/**
 * Queue Class
 */

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.stack1.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.stack1.size === 1) {
    return this.stack1.pop();
  } else {
    while (this.stack1.size > 1) {
      let curTop = this.stack1.pop();
      this.stack2.push(curTop);
    }
    let returnVal = this.stack1.pop();
    while (this.stack2.size > 0) {
      let curTop = this.stack2.pop();
      this.stack1.push(curTop);
    }
    return returnVal;
  }
};

Queue.prototype.empty = function() {
  if (this.stack1.size === 0) return true;
  return undefined;
};

Queue.prototype.size = function() {
  return this.stack1.size;
};

module.exports = { Stack, Queue };
