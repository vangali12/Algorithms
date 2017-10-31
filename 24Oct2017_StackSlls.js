function Sll() {
	this.head = null;
}

function Node(val) {
	this.value = val;
	this.next = null;
}

Sll.prototype.add = function(val) {
	var addNode = new Node(val);
	addNode.next = this.head;
	this.head = addNode;
}

Sll.prototype.remLIFO = function() {
	if (this.head == null) {
		return null;
	}
	temp = this.head;
	this.head = this.head.next;
	temp.next = null;
	return temp;
}

var my_sll = new Sll()

my_sll.add(4)
my_sll.add(13)
console.log(my_sll)