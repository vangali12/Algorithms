function checkType(item) {
	if (typeof(item) == "string") {
		console.log("It's a baby string")
	}
	else if (typeof(item) == "number") {
		console.log("It's a number")
	}
	else {
		console.log("Yo dawg, not cool.")
	}
}

checkType("freedom")