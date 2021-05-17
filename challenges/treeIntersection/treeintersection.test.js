const { node, Tree } = require("../BinaryTree/BinaryTree");
const treeIntersection = require("./treeintersection");

describe("Tree Instersection Test", () => {
  let tree1;
  let tree2;
  beforeAll(() => {
    const val1 = new node(1);
    const val2 = new node(2);
    const val3 = new node(3);
    const val4 = new node(4);
    const val5 = new node(5);

    val1.left = val2;
    val1.right = val3;
    val2.left = val4;
    val2.right = val5;


    const Val1t = new node(1);
    const Val2t = new node(7);
    const Val3t = new node(9);
    const Val4t = new node(3);
    const Val5t = new node(2);

    Val1t.left = Val2t;
    Val1t.right = Val3t;
    Val3t.left = Val4t;
    Val3t.right = Val5t;

    tree1 = new Tree(val1);
    tree2 = new Tree(Val1t);
  });
  it('should return a set of values found in both trees.',()=>{
    expect(treeIntersection(tree1,tree2)).toEqual([1, 2, 3])
  });
});
