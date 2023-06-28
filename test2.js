// let st = "This is my life.";
// let regex = /is/;
// let res = regex.test(st);
// console.log(res);


// let atr_st = "This is Not my bot problem";
// let atr_regex = /.ot/ig;//wildcard character
// let atr_res = atr_st.match(atr_regex);
// console.log(atr_res);

// let atr_str = "This is not bot sot cot problem";
// let atr_regex = /[bnsc]ot/;//square bracket
// let res = atr_str.match(atr_regex);
// console.log(res);

// let atr_str = "This is another example of regex 01.";
// let atr_regex = /[a-z0-9]/ig;
// let res = atr_str.match(atr_regex);
// console.log(res);

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

// let difficultSpelling = "titanic";
// let myRegex = /t[a-z]*?i/; // Change this line
// let result = difficultSpelling.match(myRegex);

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// console.log(firstRegex.test(firstString));
// let notFirst = "You can't find Ricky now.";
// console.log(firstRegex.test(notFirst));

// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// console.log(storyRegex.test(theEnding));
// let noEnding = "Sometimes a story will have to end";
// console.log(storyRegex.test(noEnding));

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// console.log(longHand.test(numbers));
// console.log(shortHand.test(numbers));
// console.log(longHand.test(varNames));
// console.log(shortHand.test(varNames));

// let quoteSample = "Pack my box with five dozen liquor jugs.";//"The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// console.log(result);

// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// console.log(numbers.match(shortHand));
// console.log(sentence.match(shortHand));

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;


console.log(result);



function mutation(arr) {
    
    // var rslt = false;
    var counter = 0;
    let first_len = arr[0].length;
    let second_len = arr[1].length;
    
    console.log("first index length : " + first_len + " second index length : " + second_len);
    
    if(first_len >= second_len){
        for(let i = 0; i < second_len; i++){
            for(let k = 0; k < first_len; k++){
                if(arr[i] == arr[k]){
                    counter++;
                }
            }
        }
        if(counter == second_len){
            return true;
        } else{
            return false;
        }
    } else {
        for(let j = 0; j < first_len; j++){
            for(let l = 0; l < second_len; l++){
                if(arr[j] == arr[l]){
                    counter++;
                } 
            }
        }
        if(counter == first_len){
            return true;
        } else{
            return false;
        }
    }
}

// console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
