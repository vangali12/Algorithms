function oneOnce(str) {
	var newStr = "";
	for (vari=0; i<str.length; i++) {
		for (var j=0; j<newStr.length; j++) {
			if(newStr[j] == str[i]) {
				break;
			}
		}
		return newStr;
	}
}

function findMaxChars(str) {
	var dict = {};
	for (var i=0; i<str.length; i++) {
		if(!(str[i] in dict)) {
			dict[str[i]] = 1;
		} else {
			dict[str[i]]++;
		}
	}
	max = 0;
	maxChars = [];
	for(char of dict) {
		if(dict[char]>max){
			max = dict[char];
			maxChars = [char];
		} else if (dict[char]==max) {
			maxChars.push(char);
		}
	}
	return maxChars;
}