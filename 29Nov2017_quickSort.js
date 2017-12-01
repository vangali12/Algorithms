// function that takes in an array and sort in order through bimerge and recursion
// example: 
// array to sort: [5,6,9,3]
// pivot = arr[0] = 5
// anything less than 5 will be in arr1 and anything greater than or equal to 5 will go to arr2: 
// arr1 = [3] arr2 = [6,9]

//    [5,6,9,3]
//   [3] 5 [6,9]
// 			[]6[9]

// end case is when the array's length is 1 or less
// once it starts returning, the arrays will concat and be sorted in the end. 

function quickSort(arr) {
	if(arr.length<=1) return arr; // end case

	let pivot = arr[0]; 
	let arr1 = []; // for values less than pivot
	let arr2 = []; // for values greater than or equal to pivot

	for(let i=1; i<arr.length; i++) { // iterate through arr and sort arr1 and arr2
		if(arr[i]<pivot) {
			arr1.push(arr[i]); 
		} else {
			arr2.push(arr[i]); 
		}
	}

	return (quickSort(arr1).concat(pivot).concat(quickSort(arr2))); // recursion and concat
}