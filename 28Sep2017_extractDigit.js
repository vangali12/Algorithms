function extractDigit(num, pos) {
	var ans = Math.abs(Math.trunc((num/(Math.pow(10, pos)))%10));
	return ans;
}

console.log(extractDigit(39571, 4));
console.log(extractDigit(-560489765, 6));
console.log(extractDigit(34, 0));