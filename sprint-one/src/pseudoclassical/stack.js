var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};

var stackStorage = {};

Stack.prototype.push = function(value){
	stackStorage[this.index] = value;
	this.index++;
};

Stack.prototype.pop = function(value){
	delete stackStorage[this.index];
	if (this.index > 0){
		this.index--;
	}
	return stackStorage[this.index];
}

Stack.prototype.size = function(){
	return this.index;
}