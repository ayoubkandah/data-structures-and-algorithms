let list=require("./stack-and-queue")

describe('stack tests', () => {
    ///------Stack----
    it('push and multiple push succ', () => {
        let stack = new list.Stack();
        stack.push(10);
        stack.push(12);
        stack.push(14);
        expect(stack.length).toBe(3);
        expect(stack.top.value).toBe(14)
    });
    
    it('pop  succ', () => {
        let stack = new list.Stack();
        stack.push(10);
        stack.push(12);
        stack.push(14);
        stack.pop()
        expect(stack.length).toBe(2);
        expect(stack.top.value).toBe(12)
    });
    
    it('empty  succ', () => {
        let stack = new list.Stack();
        stack.push(10);
        stack.push(12);
        stack.push(14);
        stack.pop()
        stack.pop()
        stack.pop()
        expect(stack.length).toBe(0);
        expect(stack.top).toBe(null)
        expect(stack.isEmpty()).toBe(true)
    
    });
    it('peek  succ', () => {
        let stack = new list.Stack();
        stack.push(10);
        stack.push(12);
        stack.push(14);
        
        // expect(stack.length).toBe(2);
        expect(stack.peek()).toBe(14)
    });
    it('Exception', () => {
        let stack = new list.Stack();
   
        // expect(stack.length).toBe(2);
        expect(stack.peek()).toBe("Exception")
        expect(stack.pop()).toBe("Exception")

    });
});
///-------Queue--
describe('Queue tests', () => {
it('Queue enque and mult enqueue succ', () => {
    let queue = new list.Queue();
    queue.enQueue(10);
    queue.enQueue(12);
    queue.enQueue(14);
    expect(queue.length).toBe(3);
    expect(queue.end.value).toBe(14)
});

it('dequeue  succ', () => {
    let queue = new list.Queue();
    queue.enQueue(10);
    queue.enQueue(12);
    queue.enQueue(14);
    queue.deQueue()
    expect(queue.length).toBe(2);
    expect(queue.end.value).toBe(14)
    expect(queue.front.value).toBe(12)
});
it('dequeue  succ', () => {
    let queue = new list.Queue();
    queue.enQueue(10);
    queue.enQueue(12);
    queue.enQueue(14);
    queue.deQueue()
    expect(queue.length).toBe(2);
    expect(queue.end.value).toBe(14)
    expect(queue.front.value).toBe(12)
});
it('peek  succ', () => {
    let queue = new list.Queue();
    queue.enQueue(10);
    queue.enQueue(12);
    queue.enQueue(14);
    expect( queue.peek()).toBe(10)
});
it('deQueue  succ', () => {
    let queue = new list.Queue();
    queue.enQueue(10);
    queue.enQueue(12);
    queue.enQueue(14);
    queue.deQueue();
    queue.deQueue();
    queue.deQueue();
    expect( queue.front).toBe(null)
    expect( queue.length).toBe(0)
});
it('deQueue  succ', () => {
    let queue = new list.Queue();
    queue.enQueue(10);
    queue.enQueue(12);
    queue.enQueue(14);
    queue.deQueue();
    queue.deQueue();
    queue.deQueue();
    expect( queue.front).toBe(null)
    expect( queue.length).toBe(0)
});
it('deQueue  succ', () => {
    let queue = new list.Queue();
    expect( queue.peek()).toBe("Exception")
    expect( queue.deQueue()).toBe("Exception")
});
});