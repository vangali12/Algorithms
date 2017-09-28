// Imagine you're looking at a city scape and want to record the buildings you are "able to see". You are able to see a building if there are no buildings in front of it blockig your view. Do not worry about angles of sight.


function buildings(arr) {
	var max = 0;
	var tallBuildings = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
			tallBuildings.push(arr[i]);
		}
	}
	return tallBuildings;
}

console.log(buildings([-4, 7, 8, 10, 4, 16, 8, -2, 18]));
console.log(buildings([0, 2]));
console.log(buildings([0, 0, 0, 0, 0]));
console.log(buildings([]));