function Names() {
	this.head = null;
	this.name ='this is not a name. if you see this something is wrong'
}

function Person(name) {
	this.name = name;
	this.next = null;
}

Person.prototype.speak = function() {  // this function is a prototype function to the node
	console.log("Hello my name is " + `${this.name}`);
}

Names.prototype.add = function(name) { // this function is a prototype function to the Sll
	var addNode = new Person(name)
	if (!this.head) {
		this.head = addNode;
	}
	else {
		var current = this.head;
		while (current.next) {
			current = current.next
		}
		current.next = addNode
	}
}

Names.prototype.printAll = function() {
	if (!this.head) {
		console.log("There are no nodes in this list")
	} else {
		var cur = this.head;
		while (cur) {
			console.log(`${cur.name}`)
			cur = cur.next;
		}
	}
}

Names.prototype.printAllAgain = function(name) {
	if (!this.head) {
		console.log("There are no nodes in this list");
	} else {
		var cur = this.head;
		while (cur) {
			cur.speak()
			cur = cur.next;
		}
	}
}

friends = new Names()
friends.add('christen')
friends.add('hannah')
friends.add('marc')

friends.printAll()
friends.printAllAgain()
