let PseudoQueue=require("./queue-with-stacks")


describe('PseudoQueue  tests', () => {
    it('enqueue  PseudoQueue', () => {
        let PQ = new PseudoQueue();
        PQ.enQueue(10);
        PQ.enQueue(12);
        PQ.enQueue(14);
        expect(PQ.stack1.top.value).toBe(14)
        expect(PQ.stack1.length).toBe(3)
    });
    it('deQueue', () => {
        let PQ = new PseudoQueue();
        PQ.enQueue(10);
        PQ.enQueue(12);
        PQ.enQueue(14);
       
        // console.log(PQ.stack2.top.value,"********************************")
        expect( PQ.deQueue()).toBe(10)
        expect(PQ.stack1.length).toBe(2)
    });
    it('multiple deQueue', () => {
        let PQ = new PseudoQueue();
        PQ.enQueue(10);
        PQ.enQueue(12);
        PQ.enQueue(14);
        PQ.enQueue(16);
        PQ.deQueue()
        PQ.deQueue()
        PQ.deQueue()
        // console.log(PQ.stack2.top.value,"********************************")
        expect( PQ.stack1.top.value).toBe(16)
        expect(PQ.stack1.length).toBe(1)
    });
});
