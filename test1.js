let petString = "James has a pet cat James.";
let petRegex = /James/g; // Change this line
// let result = petRegex.test(petString);
let result = petString.match(petRegex);
console.log(result);