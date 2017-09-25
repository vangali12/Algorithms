function pushFront(arr, val) {
	arr.push(val);
	for (var i = arr.length - 1; i > 0; i--) {
		arr[i] = arr[i-1];
	}
	arr[0] = val;
	return arr;
}

console.log(pushFront([5,7,9,4,2], 12)); // expect [12, 5, 7, 9, 4, 2]
console.log(pushFront([], 12)); // expect [12]
console.log(pushFront([1], 12)); // expect [12, 1]