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

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let arr1 = [];
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length/2) {
			arr1.push(arr[i]);
		} else {
			arr2.push(arr[i]);
		}
	}
	return mergeTwoArrs(mergeSort(arr1), mergeSort(arr2));
}

my_arr = [2, 1, 7, 8, 3, 0]
console.log(mergeSort(my_arr));