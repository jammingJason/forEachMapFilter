/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
	let newArr = [];
	let total = 0;
	arr.forEach(function(value) {
		total = value * 2;
		newArr.push(total);
		total = 0;
	});
	return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
	let newArr = [];
	arr.forEach(function(value) {
		if (value % 2 === 0) {
			newArr.push(value);
		}
	});
	return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and 
last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
	let newArr = [];
	arr.forEach(function(word) {
		let newStr = '';
		newStr = word.charAt(0) + '' + word.charAt(word.length - 1);
		// console.log(arr.length - 1);
		newArr.push(newStr);
	});
	// console.log(arr);
	return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and 
returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
	let newObj = {};
	let newArr = [];
	arr.forEach(function(val) {
		for (const k in val) {
			if (Object.hasOwnProperty.call(val, k)) {
				const element = val[k];
				console.log(element);
				newArr.push({(newObj[k] = element)});
			}
		}
	});
	return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
	let newObj = {};
	let newArr = Array.from(str);
	let vowels = 'aeiou';
	let intCount = 0;
	newArr.forEach(function(letter) {
		if (vowels.indexOf(letter.toLowerCase()) !== -1) {
			if (newObj[letter.toLowerCase()]) {
				newObj[letter.toLowerCase()]++;
			} else {
				newObj[letter.toLowerCase()] = 1;
			}
		}
		intCount = 0;
	});
	return newObj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
	const doubles = arr.map(function(muns) {
		return muns * 2;
	});
	return doubles;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
	const multiply = arr.map(function(muns, i) {
		return muns * i;
	});
	return multiply;
}

/*
Write a function called extractKey which accepts an array of objects and some key and 
returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
	const arrKey = arr.map(function(value) {
		for (const k in value) {
			if (Object.hasOwnProperty.call(value, k)) {
				const element = value[key];
				return element;
			}
		}
	});
	return arrKey;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
	const fullName = arr.map(function(value) {
		let strName = '';
		for (const key in value) {
			if (Object.hasOwnProperty.call(value, key)) {
				const element = value[key];
				if (strName === '') {
					strName = element;
				} else {
					strName = strName + ' ' + element;
					return strName;
				}
			}
		}
	});
	return fullName;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
	const longWords = arr.filter(function(value) {
		if (value[key]) {
			return value;
		}
	});
	return longWords;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
	const searchArr = arr.filter(function(value) {
		if (value === searchValue) {
			return value;
		}
	});
	return searchArr[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first 
found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
	let intCount = 1;
	const firstItem = arr.filter(function(value) {
		for (const k in value) {
			if (Object.hasOwnProperty.call(value, k)) {
				const element = value[k];
				if (k === key) {
					if (element === searchValue) {
						if (intCount === 1) {
							intCount = 2;
							return value;
						}
					}
				}
			}
		}
	});
	if (firstItem.length === 0) {
		return undefined;
	}
	return firstItem[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
	const newArr = Array.from(str.toLowerCase());
	let newStr = '';
	const vowels = 'aeiou';
	const noVowels = newArr.filter(function(value) {
		if (vowels.indexOf(value) === -1) {
			return value;
		}
		// return newStr++;
	});
	return noVowels.join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns 
a new array with all of the odd numbers doubled 
(HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
	const doubleOdd = arr.map(function(number) {
		if (number % 2 !== 0) {
			return number * 2;
		}
	});
	const noUndefined = [];
	doubleOdd.filter(function(value, i) {
		if (value !== undefined) {
			noUndefined.push(value);
		}
	});
	return noUndefined;
}
