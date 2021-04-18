let { node } = require('./BinaryTree')
let { Tree } = require('./BinaryTree')
describe('Binary Tree', () => {
    let tree;
    beforeAll(() => {
        let a=new node(10)
        let b=new node(7)
        let c=new node(13)
        let d=new node(5)
        let e=new node(9)
        
        a.left=b
        a.right=c
        b.left=d
        b.right=e
        tree = new Tree(a);

    });
    it('max num', () => {
        let expected = 13;
        let maxNumber = tree.findmaximumvalue();
        expect(maxNumber).toEqual(expected);
    });
    });
    