// build a function that takes 2 parameters. If the number is less than 5, return "low number guuuurl". If it is greater than 5, return "big number". If it equals five then return "5".

function numGirlSwitch(x) {
	switch(true) {
		case (x<5):
			return "low number guuuurl";
		case (x>5):
			return "big number";
		case (x==5):
			return "5";
	}
}
 
// The switch case should only be used if the value being considered is BEING COMPARED TO A SPECIFIC VALUE, not a condition. In this case, the switch case should not be used becuase we are not comparing integers to integers.

// If you want to use the switch case for conditional statements, you pass in the value "true" and each of the conditional statements will test against the value "true". If the condition is true, the action will happen. It not, it will pass on to the next condition.


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


console.log(numGirlSwitch(12));
// console.log(numGirlIf(7));
// console.log(numGirlIf(0));
// console.log(numGirlIf(5));