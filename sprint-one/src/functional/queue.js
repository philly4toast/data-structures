var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0;
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  var deleteIndex = 0; 
  var temp; 
  someInstance.dequeue = function() {
    temp = storage[deleteIndex]
    delete storage[deleteIndex];
    deleteIndex++;
    return temp;

  };

  someInstance.size = function() {
    var difference = counter - deleteIndex;
    if (difference < 0){
      difference = 0;
    }
    return difference;
  };

  return someInstance;
};
