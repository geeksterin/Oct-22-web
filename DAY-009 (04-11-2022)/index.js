
// var a = 10
// let b = 20
// const c = 30
// { // block starts
//     // var b = 40
//     const c = 50
//     console.log(a);
//     console.log(b);
//     console.log(c);
// } // block ends
// console.log(a);
// console.log(b);
// console.log(c);

var name1 = "hello"
let hello = 'name'


let concatinate1 = (name1, hello)
let concatinate2 = name1 + hello
let concatinate3 = name1 + " " + hello
let concatinate4 = `${name1}` + " " + `${hello}`
let concatinate5 = `${name1} ${hello}`
// let concatinate6 = {`${name1}`  `${hello}`}


console.log(concatinate1);
console.log(concatinate2);
console.log(concatinate3);
console.log(concatinate4);
console.log(concatinate5);
console.log("the value of concatinate5 is : ", concatinate5)
console.log("the value of concatinate5 is : "+ concatinate5)
console.log("hi there !!! "+ concatinate5 + " is the value of soncatinate5")
console.log(`hi there !!! ${concatinate5} is the value of concatinate5`)
console.log("hi there !!! ${concatinate5} is the value of concatinate5")
// console.log(concatinate6);


var day = 9

// const para = `hey this is a long sentence and i hope you are liking my sessions and gioving good reviews in the feedback form..... i wish ki sabki achi achi placemnmet ho jaye aaj humari ${day}th class hai`
// const para2 = `hey this is a long sentence and i hope you are liking my sessions.\n and giving good reviews in the feedback form..... i wish ki sabki achi achi placemnmet ho jaye aaj humari ${day}th class hai`
// const para4 = `hey this is a long sentence and i hope you are liking my sessions.\n \t \\ ' and giving good reviews in the feedback form..... i wish ki sabki achi achi placemnmet ho jaye aaj humari ${day}th class hai`

para = `day ${day} \t5\t3 class`

// x+y = 90
// xy = 0
// xy
// console.log(para);
// console.log(para2);
// console.log(para4);

console.log("\n");
console.log(para);

var str =  "HelloRishabh"
var str2 =  "Herlo world"
// toUppercase
// to Lowercase
// length
// substr 
// slice 
// split 
// tri/m 

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.length)

// 012345678910
// HelloRishabh

// 012345678910
// Herlo world
console.log(str2.substring(7, -2)) // stating index, ending index(ending indx is not included)
console.log(str2.substr(0,3)) // starting index, length (is included, and it means ths count of char, from starting index)
console.log(str2.slice(7, -2)) // stating index, ending index(ending indx is not included)

// the diff between substring and slice is tha substring takes the higer or larger number as the ending index and lower or smaller number as the starting index no matter in whhat order our numbers are written
//  in case of slice if we write higher number or larger number before the smaller or lower number then it will not work 



// console.log(str2.slice(2,-3));
// console.log();

