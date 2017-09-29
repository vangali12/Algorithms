function makeChange(chg) {
	var coins = {};
	coins["quarters"] = Math.floor(chg/25);
	chg -= coins["quarters"] * 25;
	coins["dimes"] = Math.floor(chg/10);
	chg -= coins["dimes"] * 10;
	coins["nickels"] = Math.floor(chg/5);
	coins["pennies"] = chg - coins["nickels"] * 5;
	return coins;
}



console.log(makeChange(137));