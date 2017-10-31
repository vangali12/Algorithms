function Stacks() {
	this.content = [];
}

Stacks.prototype.remove = function() {
	return this.content.pop();
}

Stacks.prototype.add = function(val) {
	this.content.push(val);
	return this;
}

myStack = new Stacks();

myStack.add(12)
myStack.add(34)
myStack.add("Hello")
myStack.add([34, 25, "World"])

console.log(myStack)