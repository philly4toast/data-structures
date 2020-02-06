var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.deleteIndex = 0;
};

var queueStorage = {};

Queue.prototype.enqueue = function(value){
	queueStorage[this.index] = value;
	this.index++;
};

Queue.prototype.dequeue = function(){
	var temp;
	temp = queueStorage[this.deleteIndex];
	delete queueStorage[this.deleteIndex];
	this.deleteIndex++;
	return temp;
}

Queue.prototype.size = function(){
	var difference = this.index - this.deleteIndex;
	if (difference < 0){
		difference = 0;
	}
	return difference;
}
