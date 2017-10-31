Sll.prototype.fromBack = function(k) {
	var cur = this.head;
	var length = 0;
	while(cur.next) {
		cur = cur.next;
		length++;
	}
	var cur = this.head;
	var target = length-k;
	for (var i=0; i<target; i++) {
		cur = cur.next;
	}
	return cur;
}