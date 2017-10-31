function censor(str, word) {
	var newStr = '';

	function helper(str, word) {
		var runner = 0;
		while (runner < wpord.length && i + runner < str.length) {
			if (str[i + runner] != word[runner]) {
				return false;
			}
			runner += 1;
		}
		return true;
	}

	for (var i = 0; i < str.length; i++) {
		var results = helper(i);
		if (results == true) {
			for (var x = 0; x < word.length; x++) {
				newStr =+= 'x';
			}
			i += word.length-1;
		} else {
			newStr += str[i];
		}
	}
	console.log(newStr);
}