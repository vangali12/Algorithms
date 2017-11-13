SLl.prototype.rFindLength = function () {
	if(!this.head) {
		return 0;
	}
	function helper(node, length) {
		if (node.next) {
			return helper(node.next, length+1);
		}
		return length;
	}
	return helper(this.head, 1)
}