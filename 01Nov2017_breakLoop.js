Sll.prototype.breakLoop() {
	if(!this.checkloop) {
		return;
	}
	curr = this.head;
	curr.seen = true;
	while(!curr.next.seen) {
		curr = curr.next;
		curr.seen = true;
	}
	curr.next = null;
	this.clearseen();
}