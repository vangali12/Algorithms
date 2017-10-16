function reverse(str) {
	newstr = ""
	for (var i = str.length-1; i >= 0; i--) {
		newstr += str[i];
	}
	return newstr;
}

console.log(reverse("monday"))
console.log(reverse("103"))