

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] !== k) {
        this._storage[index].push([k, v]);
      } else if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      }
    }
  }
  console.log((Object.keys(this._storage).length - 3) / this._limit);
  if ((Object.keys(this._storage).length - 3) / this._limit >= 0.75) {
    //add to test suite to get enough added elements
    this._limit *= 2;
  }
  console.log(this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
//console.log(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
  if ((Object.keys(this._storage).length - 3) / this._limit <= 0.25) {
    this._limit /= 2;
  }
  console.log(this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
