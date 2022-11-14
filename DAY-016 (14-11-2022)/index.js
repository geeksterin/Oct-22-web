// setTimeout(() => {
//     console.log("setTimeout");
// },7000);

// setInterval(() => {
//     console.log("setInterval");
// },5000);

// function x (y){
//     console.log("x function");
//     console.log(y);
//     y();
// }

// x(function y() {
//    console.log("y function")
// })


// const higherOrder = (m) => {
//     const a = (n) =>{
//         const b = (o) =>{
//             // console.log(m,n,o);
//             return m*n*o
//         }
//         return b
//     }
//     return a
// }
// var result = higherOrder(4)(3)(2)
// console.log(result);


const arr = [1,2,3,4,45,5,6,6]
const arr2 = ["hello", "bye", "hii", "fellow", "sunday", "mon day", "tues day", "day", "day"]
// arr2.forEach((element)=>{
//     console.log(element.toUpperCase());
// })


// var b = arr2.map((element)=>{
//     console.log(element.toUpperCase());
// })
// console.log(b)

// const a = arr2.filter((element)=>{
    
// })
// console.log(a);

const arr3 = [65,2,3,4,5]

const total = (acc, curr)=>{
    return acc+curr
}
const sum = arr3.reduce(total)

console.log("jhgfhjadbn",sum);



