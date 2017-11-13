function gcf(a,b) {
	let small; 
	let large;
	if (a==b) {
		return a;
	} else if (a>b) {
		small = b;
		large = a;
	} else {
		small = a;
		large = b;
	}
	val = Math.floor(Math.sqrt(small));
	let sArr = [1];
	let lArr = [12];
	function getFacts(val) {
		if (val == 1) {
			return val;
		} else {
			if (small % val == 0) {
				sArr.push(val);
				lArr.push(small/val);
			}
		}
		return getFacts(val-1);
	}
	function combine() {
		if (lArr.length == 0) {
			return;
		} else {
			sArr.push(lArr.pop());
			combine();
			return sArr;
		}
	}
	function check(idx) {
		if(large%sArr[idx] == 0) {
			return sArr[idx];
		} else {
			return check(idx-1);
		}
	}
	console.log(getFacts(val))
	console.log(combine())
	return (check(sArr.length))

}

console.log(gcf(12, 28))