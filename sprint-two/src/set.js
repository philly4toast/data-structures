var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  //console.log(set);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = true;
};

setPrototype.contains = function(item) {
  return item in this.storage;
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
