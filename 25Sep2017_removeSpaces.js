function remSpaces(str) {
	var rs="";
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== " ") {
			rs += str[i];
		}
	}
	return rs;
}

console.log(remSpaces("Washington Trails Association"));
console.log(remSpaces("  Today is Monday . H"));