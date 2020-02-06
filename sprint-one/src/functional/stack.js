var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
    var counter = 0;
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    delete storage[counter]
    if (counter === 0){
      counter = 0;
    }else{
        counter--;
    }
    return storage[counter];
  };

  someInstance.size = function(obj) {

    return counter;
  };

  return someInstance;
};
