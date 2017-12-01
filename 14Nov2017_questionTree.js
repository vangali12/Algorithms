function qTree(str) {
	var ans = [];
	for (var i=0; i<str.length; i++) {
		if (str[i] == "?") {
			break;
		}
	}
	if (i == str.length) {
		return str;
	}
	function helper(val) {
		var newStr0="";
		var newStr1="";
		var count = 0;
		for (var j=0; j<val.length; j++) {
			if (val[j] == "?"){
				if (count < 1) {
					newStr0 += "0";
					newStr1 += "1";
				} else {
					newStr0 += val[j];
					newStr1 += val[j];
				}
				count++;
			} else {
				newStr0 += val[j];
				newStr1 += val[j];
			}
		}
		if (count == 1) {
			ans.push(newStr0);
			ans.push(newStr1);
		} else {
			helper(newStr0);
			helper(newStr1);
		}
	}
	helper(str);
	return ans;
}


// console.log(qTree("a?b?c?"))


function qTree2(str) {
	var ans=[];
	function helper(beg, rem) {
		var begStr0 = beg;
		var begStr1 = beg;
		var newRem = "";
		for (var i=0; i<rem.length; i++) {
			if (rem[i] == "?") {
				begStr0 += "0";
				begStr1 += "1";
				newRem = rem.slice(i+1);
				break;
			} else {
				begStr0 += rem[i];
				begStr1 += rem[i];
			}
		}
		if (i==rem.length) {
			ans.push(beg + rem);
		} else {
			helper(begStr0, newRem);
			helper(begStr1, newRem);
		}
	}
	helper("", str);
	return ans;
}

console.log(qTree2("a?b?c?"));