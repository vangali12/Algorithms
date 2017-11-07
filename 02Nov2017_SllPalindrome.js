Sll.prototype.isPalindrome = function() {
	if(!this.head) {
		return false;
	}
	if(!this.head.next) {
		return true;
	}
	let count = this.countNodes();
	let halfway = Math.floor(count/2);
	let distance = 0;
	let curr = this.head;
	while(distance < halfway) {
		if(curr.val != this.nthFromLast(distance).val) {
			return false;
		}
		distance++;
		curr = curr.next;
	}
	return true;
}