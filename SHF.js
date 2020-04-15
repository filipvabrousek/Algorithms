<script>

	
	

 // var array = [[1, 2, 3, 4, 5, 5]];	
// var array = [[0.1, 0.3, 0.4, 0.33, 0.96]];
 var array = [[0.16, 0.16, 0.16, 0.33, 0.16]];
	
	
// getBinaryVersions(array);
	
function part(arr){
var points = [];
	
for (var i = 0; i < arr.length - 1; i++){
	let startSum = arr.slice(0, i + 1).reduce((a, b) => a + b);							  
	let endSum = arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
	let p = {
		index: i,
		diff: Math.abs(startSum - endSum)
	}
	points.push(p);
}
	
let mapped = points.map(e => e.diff);
let min = mapped.indexOf(Math.min(...mapped));
	
function splitToTwo(arr, idx){
	let start = arr.slice(0, idx + 1);	  
	let end = arr.slice(idx + 1, arr.length);
	
	var res = [start, end];
	return res;
}
	let res = splitToTwo(arr, min);
	return res;
}
	
	
	var biggea = [];
	var pts = [];
	var c = 0;
	var interm = [];
	var suba = [];
	
	
	var BINARIES = [];
	
	
	function containsMax2(array){
		var allow = true;
		
		
		for (var i = 0; i < array.length; i++){
			if (array[i].length > 2){
				allow = false;
			}
		}
		
		
		return allow;
	}
	
	
	
	

	
	

	
	
function splitEachArray(arr){
	for (var i = 0; i < arr.length; i++){
		
	if (arr[i].length >= 2){
	let parts = part(arr[i]);
	pts = parts;
		
	console.log("PARTS");
	console.log(pts);
	suba.push({arr: pts, numbers: [Array(pts[0].length).fill(0),
									 Array(pts[1].length).fill(1)   ]});
		
	BINARIES.push(Array(pts[0].length).fill(0),
				  Array(pts[1].length).fill(1));
	} else { 
	BINARIES.push([2]);
	}
		/*
		if (arr[i].length < 2){
			alert("NOW");
			alert(arr[i]);
		}*/
	}
	
	 BINARIES.push(["SEPARATOR-----------"]);
	 interm.push(suba);
	
	
 	 c++;
	
	if (c < 9){
		  splitEachArray(pts); // pts
	}
	suba = [];
}
	
	
	/*// IF BINARIES CONTAINS MAX 2 ELEMENTS STOP LOOP, FINISH IN OTHER METHOD
	if (containsMax2(BINARIES) == true){
		c = 200;
	}*/
	
splitEachArray(array);

// console.log(BINARIES);

	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
for (var i = 0; i < interm.length; i++){
for (var j = 0; j < interm[i].length; j++){
	for (var k = 0; k < interm[i][j].length; k++){
	
		
		//for (var l = 0; l < interm[i][j][k].length; l++){
	
	let el = interm[i][j][k];//[l];
		
		if (el.length > 0){
				console.error(el);
		}
	
		
		this.numerals[i][j][k] = "V";
		
		
//}	
		
		
		
}	
}	
}
	
	
	
	

	// console.log(numerals);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*

for (var i = 0; i < array.length; i++){
	let parts = array[i];
	console.warn(parts);
	
	let a = part(parts)
	console.warn(a);
}*/
	
	
// REPEAT THIS IN WHILE CYCLE
	
	
	
	
	
	
	
	
	
	
	
	
	
// BIG FIELD CONTAINS ONLY SINGLE ELEMENTS
function containsOnlySingle(arr){
	var allow = true;
	
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length > 1){
			allow = false;
		}
	}
	return allow;
}
	
	
var versions = [];

	var stop = 101;
while(containsOnlySingle(part(array)) == false && stop < 100){
	console.log("oih")
	array = part(array);
	console.log(array);
	
	versions.push(array);
	
	stop++;
}

var final = [];

for (var i = 0; i < array.length; i++){
	
	
	if (array[i].length == 2){
		for (var j = 0; j < array[i].length; j++){
			final.push([array[i][j]]);
			
		}
	} else {
		final.push(array[i]);
	}
}

	
versions.push(final);
// console.warn(versions);
	
// console.log("-------------------------")

var binaryVersions = [];
	
for (var i = 0; i < versions.length; i++){
	for (var j = 0; j < versions[i].length; j++){
		
	var sub = versions[i][j];
	
	var obj = {
		arr: sub,
		binary: (j % 2) == 0 ? Array(sub.length).fill(0) : Array(sub.length).fill(1)
	}
	
	binaryVersions.push(obj);	
	}
}	
	
console.log(binaryVersions);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*let arr = [[1], [1, 2]];
	let ct = containsOnlySingle(arr);
	console.warn(ct);
	*/
	
	

	/*
console.log("-----------------");
var res = part(array);
console.warn(res);
	
var copy = part(res);
console.warn(copy);
	
var copa = part(copy);
console.warn(copa);
	
// PROBLEM HERE
var suba = part(copa);
console.warn(suba);
	*/
	
	////var res = part(array);
	
	
	
	
	
	
	
	
	/*
let contains = containsOnlySingle(copa);	
console.log(contains);
	
	*/
	
	/*
var last = part(copy);
console.warn(last);
*/	
/*
while(containsOnlySingle(res) == false){
	res = part(array);
}*/
	//part(split);
	
	
	
	
	/*
while(wa.length > 0){
	let SP1 = findSplitPoint(wa, wa.length);
	wa = wa.splice(0, SA);
	bq = wa.splice(0, SB);
	console.log(wa);
	console.log(bq);
}
	*/
	
	
function printVertically(arr){
	for (var i = 0; i < arr.length; i++){
		console.log(`${arr[i]}\n`);
	}
}
	
function findSplitPoint(arr, n){
 var leftSum = 0;

for (var i = 0; i < n; i++){
	leftSum += arr[i];
	
	var rightSum = 0;
	
	for (var j = i + 1; j < n; j++){
		rightSum += arr[j];		
	}
	
	if (leftSum == rightSum){
			return i + 1;
	}
}
	return -1;
}
	
	


	
	
	
	
	
	/*
	
function getSubArrays(arr, point){
	let first = arr.slice(0, point);
	let second = arr.slice(point, arr.length);
	
	console.log(first);
	console.log(second);
	
	
	let sp1 = findSplitPoint(first, first.length);
	let sp2 = findSplitPoint(second, second.length);
	
	
	if ((sp1.length >= 1) || (sp2.length >= 1)) {
		getSubArrays(sp1, sp1.length);
		getSubArrays(sp2, sp2.length);
		
		console.log(sp1);
	console.log(sp2);
	}
}*/
	
	

	

	
	
// https://www.wikitechy.com/interview-questions/java/how-to-optimally-divide-an-array-into-two-subarrays
	



</script>
