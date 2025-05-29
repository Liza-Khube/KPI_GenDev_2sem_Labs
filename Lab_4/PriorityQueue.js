class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  getInfo() {
    return this.queue;
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
  }

  peek(option) {
    if (!this.queue.length) {
      console.log("Queue is empty");
      return null;
    }
    if (option === "highest") {
      let element = this.queue.reduce(
        (acc, curr) => (acc.priority > curr.priority ? acc : curr),
        this.queue[0]
      );
      return element;
    } else if (option === "lowest") {
      let element = this.queue.reduce(
        (acc, curr) => (acc.priority < curr.priority ? acc : curr),
        this.queue[0]
      );
      return element;
    } else if (option === "newest") {
      return this.queue[this.queue.length - 1];
    } else if (option === "oldest") {
      return this.queue[0];
    } else {
      console.log(`Unrecognized option: ${option}`);
      return null;
    }
  }

  dequeue(option) {
    if (!this.queue.length) {
      console.log("Queue is empty");
      return null;
    }
    if (option === "highest") {
      let highest = this.peek("highest");
      let index = this.queue.indexOf(highest);
      return this.queue.splice(index, 1);
    } else if (option === "lowest") {
      let lowest = this.peek("lowest");
      let index = this.queue.indexOf(lowest);
      return this.queue.splice(index, 1);
    } else if (option === "newest") {
      return this.queue.pop();
    } else if (option === "oldest") {
      return this.queue.shift();
    } else {
      console.log(`Unrecognized option: ${option}`);
      return null;
    }
  }
}

// Test
const myQueue = new PriorityQueue();

myQueue.enqueue("one", 1);
console.log(`Queue: ${JSON.stringify(myQueue.getInfo())}`);
myQueue.enqueue("two", 2);
myQueue.enqueue("five", 5);
myQueue.enqueue("four", 4);
console.log(`Oldest: ${JSON.stringify(myQueue.peek("oldest"))}`);
console.log(`Newest: ${JSON.stringify(myQueue.peek("newest"))}`);
console.log(`Highest: ${JSON.stringify(myQueue.peek("highest"))}`);
myQueue.dequeue("meow");
myQueue.dequeue("lowest");
myQueue.dequeue("highest");
console.log("After dequeuing:");
console.log(`Lowest: ${JSON.stringify(myQueue.peek("lowest"))}`);
console.log(`Highest: ${JSON.stringify(myQueue.peek("highest"))}`);
console.log(`Oldest: ${JSON.stringify(myQueue.peek("oldest"))}`);
console.log(`Queue: ${JSON.stringify(myQueue.getInfo())}`);
