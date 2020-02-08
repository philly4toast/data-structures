var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children && this.value !== target) {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
      return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
