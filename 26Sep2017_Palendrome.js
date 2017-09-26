function Palendrome(str) {
	for (var i = 0; i < Math.floor(str.length/2); i++) {
		if (str[i] !== str[str.length-1-i]) {
			return false;
		}
	}
	return true;
}

console.log(Palendrome("racecar")); // expect true
console.log(Palendrome("tacocat")); // expect true
console.log(Palendrome("Temporary")); // expect false
console.log(Palendrome("hiiiiik")); // expect false