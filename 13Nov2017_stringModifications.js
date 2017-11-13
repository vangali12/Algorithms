function stringToArray(str) {
	var result = [];
	var newWord = "";
	for (var i = 0; i < str.length; i++) {
		if(str[i] == " " || i == str.length-1) {
			result.push(newWord);
			newWord = "";
		}
		else {
			newWord += str[i];
		}
	}
	return result;
}

function longestWord(str) {
	var max = 0;
	var idx = 0;
	var arr = stringToArray(str);
	for (var i = 0; i< arr.length; i++) {
		if (arr[i].length>max) {
		max = arr[i].length;
		idx = i;
		}
	}
	return arr[idx];
}

function reverseWordOrder(str) {
	var arr = stringToArray(str);
	var newStr = "";
	for (var i=arr.length; i>=0; i--) {
		newStr += arr[i];
		if(i!=0) {
			newStr += " ";
		}
	}
	return newStr;
}

function uniqueWord(str) {
	var arr = stringToArray(str);
	var uniqueArr = [];
	for (var i = 0; i<arr.length; i++) {
		var count = 0;
		for (var j = 0; j<arr.length; j++) {
			if (arr[i] == arr[i]) {
				count ++;
			}
			if (count == 1) {
				uniqueArr.push(arr[i])
			}
		}
	}
	return uniqueArr;
}