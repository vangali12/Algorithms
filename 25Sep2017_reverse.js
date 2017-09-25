function reverse(str) {
	var rev="";
	for(var i= (str.length-1) ; i >= 0; i--) {
		rev = rev+str[i];
	}
	return rev;
}

console.log(reverse("hello"));
console.log(reverse("  Today is Monday.  H"))