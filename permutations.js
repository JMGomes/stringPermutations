function printPermutations(s){
	let result = getPermutationsAux("", s.split(''), []);
	result.forEach(item => console.log(item)); // print this way to avoid "(...) X more items ]" print"
}

// string, array (string to permute), array
function getPermutationsAux(past, remaining, permutations){
	if(remaining.length === 0) { //if last char, add past string to permutations
		permutations.push(past);
	}
	else {
		for(let i=0; i < remaining.length; i++) { // pick one char
			// clone array without chosen char
			let remainingArray = [...remaining]; 
			remainingArray.splice(i,1); 

			// recursive call appending chosen char to string to past string
			getPermutationsAux(past+remaining[i], remainingArray.join(''), permutations);
		}
	}
	return permutations;
}

printPermutations("joaogomes");
