function partition(arr) {
	var arr1 = [];
	var arr2 = [];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] < arr[0]) {
			arr1.push(arr[i]);
		} else {
			arr2.push(arr[i]);
		}
	}
	return [arr1, arr2];
}

function mergeTwoArrs(arr1, arr2) {
	let newArr = [];
	let count1 = 0;
	let count2 = 0;
	while (newArr.length < arr1.length + arr2.length) {
		if (count1 == arr1.length) {
			newArr.push(arr2[count2]);
			count2++;
		} else if (count2 == arr2.length) {
			newArr.push(arr1[count1]);
			count1++;
		} else if (arr1[count1] < arr2[count2]) {
			newArr.push(arr1[count1]);
			count1++;
		} else {
			newArr.push(arr2[count2]);
			count2++;
		}
	}
	return newArr;
}

arr1 = [5, 65, 9, 51, 6, 30, 7, -5, 9, -4, 3, 1, 0];
arr2 = [1, 5, 9, 12, 36, 60, 88];
arr3 = [3, 6, 10, 13, 25, 40, 66, 70];

console.log(partition(arr1));
console.log(mergeTwoArrs(arr2, arr3));