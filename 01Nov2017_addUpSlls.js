Sll.prototype.addUp = function() {
	var count = 0;
	var firstSum = 0;
	var secondSum = 0;
	while (count < first.count()) {
		firstSUm += nthFromLast(count).val * Math.pow(10, count);
		count++;
	}
	count = 0;
	while (count < second.count()) {
		secondSUm += nthFromLast(count).val * Math.pow(10, count);
	}
	val newNodeVals = firstSUm +secondSum;
	var newSll = newSll();
	while(newNodeVals > 0) {
		newSll.addToFront(newNodeVals % 10);
		newNodeVals = Math.floor(newNodeVals/10);
	}
	return Sll;
}