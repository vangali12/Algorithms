function Sll() {
	this.head = null;
}

function Node(val) {
	this.next = null;
	this.val = val;	
}

Sll.prototype.add = function(val) {
	var addNode = new Node(val);
	if (!this.head) {
		this.head = addNode;
	} else {
		var runner = this.head;
		while (runner.next) {
			runner = runner.next;
		}
		runner.next = addNode;
	}
	return this;
}

Sll.prototype.printAll = function() {
	if (!this.head) {
		console.log("There are no nodes");
	} else {
		var runner = this.head;
		while(runner) {
			console.log(runner.val);
			runner = runner.next;
		}
	}
}

Sll.prototype.isPali = function() {
	var length = 0;
	var runner = this.head;
	var result = true;
	var count = 0;
	if (!this.head) {
		result = false;
		return result;
	}
	function helper(cur) {
		if(cur.next) {
			length++;
			helper(cur.next);
		}
		if(count > length/2) {
			return result;
		}
		if(runner.val != cur.val) {
			result = false;
		}
		runner = runner.next;
		count++;
	}
	helper(this.head);
	return result;
}

var newList = new Sll();
newList.add(2).add(4).add(6).add(8).printAll()
console.log(newList.isPali())

var newList1 = new Sll();
newList1.add("M").add("O").add("M").printAll()
console.log(newList1.isPali())

var newList2 = new Sll();
newList2.add("M").add("O").add("O").add("M").printAll()
console.log(newList2.isPali())

var newList3 = new Sll();
console.log(newList3.isPali())