Sll.prototype.hasLoop = function() {
	var cur = this.head;
	while(cur.next){
		if(cur.visited) {
			return true;
		}
		cur.visited = true;
		cur = cur.next;
	}
	return false;
}