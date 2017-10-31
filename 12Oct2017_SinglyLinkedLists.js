function ListNode(val) {
	this.val = val
	this.next = null;
}

function Sll() {
	this.head = null;
}

Sll.prototype.add = function(val) {
	var addNode = new ListNode(val)
	if (!this.head) {
		this.head = addNode;
	}
	else {
		var current = this.head;
		while (current.next) {
			current = current.next
		}
		current.next = addNode
	}
}

Sll.prototype.printAll = function() {
	if (!this.head) {
		console.log("There are no nodes in this list")
	} else {
		var cur = this.head;
		while (cur) {
			console.log(`${cur.val}`)
			cur = cur.next;
		}
	}
}

// List: Add Front
// Rudy isn't nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.

addFrontSll = new Sll()
addFrontSll.add('number1')
addFrontSll.add('number2')
addFrontSll.add('number3')

Sll.prototype.addFront = function(val) {
	var addNode = new ListNode(val)
	if (!this.head) {
		this.head = addNode;
	} else {
		addNode.next = this.head;
		this.head = addNode;
	}
}

// addFrontSll.addFront('Rudy')
// addFrontSll.printAll()

// List: Contains
// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.

containsSll = new Sll()
containsSll.add('Timothy')
containsSll.add('Cameron')
containsSll.add('Stephanie')
containsSll.add('Tad')
containsSll.add('Kevin')
containsSll.add('Tina')

Sll.prototype.contains = function(name) {
	if (!this.head) {
		console.log("There is no one in line")
	} else {
		var cur = this.head;
		var count = 1;
		while (cur) {
			if (cur.val == name) {
				console.log(name + " is the " + count + "th person in line");
				break
			} else {
				count += 1;
				cur = cur.next;
			}
		}
	}
}

// containsSll.contains('Tad')
// containsSll.printAll()

// List: Remove Front
// Ha! Rude is geting what he deserves - kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.

removeFrontSll = new Sll()
removeFrontSll.add('numberOne')
removeFrontSll.add('numberTwo')
removeFrontSll.add('numberThree')
removeFrontSll.add('numberFour')
removeFrontSll.add('numberFive')

Sll.prototype.removeFront = function() {
	if (!this.head) {
		console.log("There are no nodes in this list!")
	} else {
		var second = this.head.next
		this.head = second
	}
}

// removeFrontSll.removeFront()
// removeFrontSll.printAll()

// List: Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no - only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.

// Look at the example above - I've impcorporated this in the "contains" function

// SList: Length
// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList

lengthSll = new Sll()
lengthSll.add('contestant1')
lengthSll.add('contestant2')
lengthSll.add('contestant3')
lengthSll.add('contestant4')
lengthSll.add('contestant5')
lengthSll.add('contestant6')
lengthSll.add('contestant7')
lengthSll.add('contestant8')
lengthSll.add('contestant9')
lengthSll.add('contestant10')
lengthSll.add('contestant11')

Sll.prototype.length = function() {
	if (!this.head) {
		console.log("There are no nodes in this list!")
	} else {
		current = this.head
		count = 0
		while (current) {
			count += 1
			current = current.next
		}
	}
	console.log(count)
}

// lengthSll.length()

// SList: Display
// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

// Look at the function printAll() above. - I've already done this one!

// SList: Max
// American Idol seems to air singers that are the best, and a few htat seem like the worst! Create function max(node) to return list's largest values

maxSll = new Sll()
maxSll.add('5')
maxSll.add('9')
maxSll.add('7')
maxSll.add('2')
maxSll.add('8')
maxSll.add('1')

Sll.prototype.max = function() {
	if (!this.head) {
		console.log("There are no contestants!")
	} else {
		var current = this.head
		var max = this.head.val
		var min = this.head.val
		while (current) {
			if (current.val > max) {
				max = current.val
			}
			if (current.val < min) {
				min = current.val
			}
			current = current.next;
		}
		console.log("The best candidate is rated " + max)
		console.log("The worst candidate is rated " + min)
	}
}

maxSll.max()
