function Sll() {
	this.head = null;
}

function Node(val) {
	this.val = val;
	this.next = null;
}

Sll.prototype.add = function() {
	var newNode = new Node(val);
	if(!this.head) {
		this.head = newNode;
	} else {
		var cur = this.head;
		while (cur.next) {
			cur = cur.next;
		}
		cur.next = newNode;
	}
}

Sll.prototype.reverse = function() {
	if(!this.head) {
		return
	}
	var prev = null;
	var at = this.head;
	var upcoming = this.head.next;

	while(upcoming) {
		at.next = prev;
		prev = at;
		at = upcoming;
		upcoming = upcoming.next;
	}
	at.next = prev;
	this.head = at;
}