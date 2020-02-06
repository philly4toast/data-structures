class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.index = 0;
  	this.deleteIndex = 0;
  	this.queueStorage = {};
  	this.temp;
  	this.difference;
  }

  enqueue(value){
  	this.queueStorage[this.index] = value;
  	this.index++;
  }

  dequeue(){
  	this.temp = this.queueStorage[this.deleteIndex];
  	delete this.queueStorage[this.deleteIndex];
  	this.deleteIndex++;
  	return this.temp;
  }

  size(){
  	this.difference = this.index - this.deleteIndex;
  	if (this.difference < 0){
  		this.difference = 0;
  	}
  	return this.difference;
  }

}
