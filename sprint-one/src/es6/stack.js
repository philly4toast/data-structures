class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(obj) {
  	this.index = 0;
  	this.stackStorage = {};
  }

  push(value){
  		this.stackStorage[this.index] = value;
		this.index++;
  }

  pop(){
  	delete this.stackStorage[this.index];
  	if (this.index > 0){
  		this.index--;
  	}
  	return this.stackStorage[this.index];
  }

  size(obj){
  	return this.index;
  }

}