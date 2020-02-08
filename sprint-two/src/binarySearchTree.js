let BinarySearchTree = function(value) {
    let newNode = Object.create(binarySearchTreeMethods);
    newNode.value = value;
    newNode.head;
    newNode.left = null;
    newNode.right = null;
    return newNode;
}

let binarySearchTreeMethods = {
    insert: function(value) {
        let newNode = BinarySearchTree(value);
        let traverseNodes = (node) => {
            if (value > node.value){
                if (node.right === null){
                    node.right = newNode;
                    return;
                }else{
                    traverseNodes(node.right);
                }
            }else{
                if (node.left === null){
                    node.left = newNode;
                    return;
                }else{
                    traverseNodes(node.left)
                }
            }
        }
        traverseNodes(this);
    },

    contains: function(value) {
        let parent = this;
        while (parent) {
            if (parent.value === value) {
                return true;
            }
            if (parent.value < value) {
                parent = parent.right;
                continue;
            }
            if (parent.value > value) {
                parent = parent.left;
                continue;
            }
            return false;
        }
        return false;
    },

    depthFirstLog: function(cb) {
        let parent = this;
        let traverseNodes = (parent) => {
            if (parent) {
                cb(parent.value);
                let temp = parent;
                if (parent.left !== null) {
                    temp = parent;
                    parent = parent.left;
                    traverseNodes(parent);
                }
                if (temp.right !== null) {
                    parent = temp.right;
                    traverseNodes(parent);
                };
            }
        }
        traverseNodes(parent);
    }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
