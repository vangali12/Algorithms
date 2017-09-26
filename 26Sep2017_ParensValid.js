function ParensValid(str) {
	var right = 0;
	var left = 0;
	var Lcount = 0;
	var Rcount = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] == "(") {
			left += 1;
			Lcount += i;
		}
		else if (str[i] == ")") {
			right += 1;
			Rcount += i;
		}
		else {
			continue;
		}
	}
	if (left == right && Lcount < Rcount) {
		return true;
	}
	else {
		return false;
	}
}

console.log(ParensValid("(()())")); // expect true
console.log(ParensValid("()()()")); // expect true
console.log(ParensValid(")()()(")); // expect false
console.log(ParensValid("(()")); // expect false
console.log(ParensValid("")); // expect true
console.log(ParensValid("(Hl;(sjm)[c(0))wr(  )")); // expect true;