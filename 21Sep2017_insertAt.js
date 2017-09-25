function insertAt(arr, idx, val) {
	arr.push(val);
	for (var i=arr.length-1; i > idx; i--) {
		arr[i]=arr[i-1];
	}
	arr[i] = val;
	return arr;
}

console.log(insertAt([5,7,9,4,2], 2, 12)); //expect [5, 7, 12, 9, 4, 2]
console.log(insertAt([1], 0, 12)); // expect [12, 1]