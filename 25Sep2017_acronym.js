function acronym(str) {
	var ACRO = "";
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	if (alphabet.includes(str[0].toLowerCase())) {
		ACRO += str[0];
	}
	for (var i = 0; i < (str.length-1); i++) {
		if (str[i] == " " && alphabet.includes(str[i+1].toLowerCase())) {
			ACRO += str[i+1];
		}
	}
	return ACRO;
}

console.log(acronym("Washington Trails Association")); // expect WTA
console.log(acronym("  Today Is Friday .  H")); // expect TIFH //str.length = 22, for loop 0-20