let { node } = require('./tree.js')
let { Tree } = require('./tree.js')
let { BinarySearch } = require('./tree.js')
describe('Binary Tree', () => {
    let tree;
    beforeAll(() => {
        let a = new node("A");
        let b = new node("B");
        let c = new node("C");
        let d = new node("D");
        let e = new node("E");
     
        a.left=b
  a.right=c
  b.left=d
  b.right=e
        tree = new Tree(a);
    });
    it('pre order Test', () => {
        let expected = ["A", "B", "D", "E","C"];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expected);
    });
    it('in order Test', () => {
        let expected = ["D", "B", "E", "A", "C"];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expected);
    });
    it('post Order Test', () => {
        let expected = ["D", "E", "B",  "C", "A"];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expected);
    });
});
describe('Binary Search Test', () => {
    it('can successfully instantiate an empty tree', () => {
        let tree = new BinarySearch();
        expect(tree.root).toEqual();
    });
    it('adding root', () => {
        let tree = new BinarySearch();
        let value = 1;
        tree.add(value);
        expect(tree.root.value).toEqual(value);
    });
    it('adding left & Right child Test', () => {
        let tree = new BinarySearch();
        let root = 12;
        let left = 6;
        let right = 15;
        tree.add(root);
        tree.add(left);
        tree.add(right);
        expect(tree.root.left.value).toEqual(left);
        expect(tree.root.right.value).toEqual(right);
    });
 
    it('can successfully search for a value in the tree', () => {
        let tree = new BinarySearch();
        tree.add(10);
        tree.add(5);
        tree.add(15);
        tree.add(13);
        expect(tree.contains(10)).toBe(true);
        expect(tree.contains(15)).toBe(true);
        expect(tree.contains(19)).toBe(false);
    });
});