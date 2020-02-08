var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

list.addToTail = function(value) {
  let newNode = new Node(value);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
    return this.tail.value;
  };

  list.removeHead = function() {
    let headValue = this.head.value;
    this.head = this.head.next;

    return headValue;
  };

  list.contains = function(target) {
    var currentPos = this.head;

    while (currentPos) {
      if (currentPos.value === target) {
        return true;
      } else {
        currentPos = currentPos.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */