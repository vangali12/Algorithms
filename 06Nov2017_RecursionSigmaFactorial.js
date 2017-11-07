function rSig(val) {
	if (val == 1) {
		return val;
	} else {
		return val + rSig(val-1);
	}
}

function rFact(val) {
	if (val == 1) {
		return val;
	} else {
		return val * rSig(val-1);
	}
}