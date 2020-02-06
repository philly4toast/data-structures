var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObject = Object.create(queueMethods);
  queueObject.index = 0;
  queueObject.deleteIndex = 0;
  return queueObject;
};
var queueStorage = {};

var queueMethods = {
	enqueue: 	function(value){
					queueStorage[this.index] = value;
					this.index++;
				},
	dequeue:  	function(){
					var temp;
					temp = queueStorage[this.deleteIndex];
					delete queueStorage[this.deleteIndex];
					this.deleteIndex++;
					return temp;
				},
	size: 		function(){
					var difference = this.index - this.deleteIndex;
					if (difference < 0){
						difference = 0;
					}
					return difference;
				}


};


