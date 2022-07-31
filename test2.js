let st = "This is my life.";
let regex = /is/;
let res = regex.test(st);
// console.log(res);


let atr_st = "This is Not my not problem";
let atr_regex = /Not/ig;
let atr_res = atr_st.match(atr_regex);
console.log(atr_res);