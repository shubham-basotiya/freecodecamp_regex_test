// let st = "This is my life.";
// let regex = /is/;
// let res = regex.test(st);
// console.log(res);


// let atr_st = "This is Not my bot problem";
// let atr_regex = /.ot/ig;//wildcard character
// let atr_res = atr_st.match(atr_regex);
// console.log(atr_res);

let atr_str = "This is not bot sot cot problem";
let atr_regex = /[bnsc]ot/;//square bracket
let res = atr_str.match(atr_regex);
console.log(res);