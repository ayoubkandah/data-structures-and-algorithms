class node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {
        let arr = []
        saving(this.root)
        function saving(node) {
            if (node) {
                arr.push(node.value)
            }
            if (node.left) {
                saving(node.left)
            } if (node.right) {
                saving(node.right)
            }
        }
        return arr
    }
    inOrder() {
        let arr = []
        saving(this.root)
        function saving(node) {

            if (node.left) {
                saving(node.left)
            }
            if (node) {
                arr.push(node.value)
            }
            if (node.right) {
                saving(node.right)
            }
        }
        return arr
    }

    postOrder() {
        let arr = []
        saving(this.root)
        function saving(node) {
            if (node.left) {
                saving(node.left)
            }
            if (node.right) {
                saving(node.right)
            }
            if (node) {
                arr.push(node.value)

            }

        }
        return arr
    }
    findmaximumvalue() {
        let x = this.preOrder()
        let result = x[0]
        for (let y = 0; y < x.length; y++) {
            if (x[y] > result) {
                result = x[y]
            }
        }
        return result
    }
}
module.exports={Tree:Tree,node:node}
