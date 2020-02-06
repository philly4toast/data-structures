var Stack = function() {
var objectInstance = {};
objectInstance.index = 0;
_.extend(objectInstance, stackMethods)
return objectInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
var stackStorage ={};
var stackMethods = {
	push: 	function(value){
				stackStorage[this.index] = value;
				this.index++;
			},
	pop: 	function(){
				delete stackStorage[this.index];
				if (this.index > 0){
					this.index--;
				}
				return stackStorage[this.index];
			},
	size: 	function(obj){
				return this.index;
			}

};


