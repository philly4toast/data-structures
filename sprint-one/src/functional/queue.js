var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
        delete storage[counter]
    if (counter === 0){
      counter = 0;
    }else{
        counter--;
    }
    return storage[counter];
  };

  someInstance.size = function(obj) {
        var largest = counter;
    for (var key in obj){
      if (key > largest){
        largest = key;
      }
    }
    return largest;
  };

  return someInstance;
};
