// build a function that takes 2 parameters. If the number is less than 5, return "low number guuuurl". If it is greater than 5, return "big number". If it equals five then return "5".

// function numGirlSwitch(x) {
// 	switch(x) {
// 		case <5:
// 			return "low number guuuurl";
// 		case >5:
// 			return "big number";
// 		case ==5:
// 			return "5";
// 	}
// }
 
// The switch case should only be used if the value being considered is BEING COMPARED TO A SPECIFIC VALUE, not a condition. In this case, the switch case should not be used becuase we are not comparing integers to integers.


function numGirlIf(x) {
	if (x < 5) {
		return "low number guuuurl";
	}
	else if (x > 5) {
		return "big number";
	}
	else {
		return "5";
	}
}

console.log(numGirlIf(7));
console.log(numGirlIf(0));
console.log(numGirlIf(5));