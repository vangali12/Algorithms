function popFront(arr) {
	for (var i=0; i < arr.length-1; i++) {
		arr[i] = arr[i+1];
	}
	arr.pop();
	return arr;
}

var numbers = [5,7,9,4,2];
var oneEdge = [1];

console.log(popFront(numbers)); // expect [7, 9, 4, 2]
console.log(popFront(oneEdge)); // expect []