function removeAt(arr, idx) {
	for (var i = idx; i <arr.length; i++) {
		arr[i] = arr[i+1];
	}
	arr.pop();
	return arr;
}

console.log(removeAt([5,7,9,4,2], 3)); // expect 5, 7, 9, 2]
console.log(removeAt([1], 0)); // expect []