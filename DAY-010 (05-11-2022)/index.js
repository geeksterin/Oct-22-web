// // console.log(a);
// hello()
// b()
// // let a = 10
// function hello() {
//     console.log("hello");
// }

let b = () => {
    console.log("arrow function");
}



// function a() {
//     function c() {
//         function d() {
//             console.log(b);
//         }
//         d()
//     }
//     c()
// }
// a()
// var b = 10

var name1 = "sharma"


let hello = {
    name1:"rishabh",
    geekster : () =>{
        console.log("arrow fn", this.name1);
    },
    geek(){
        console.log("normal fn", this.name1);
    }
}

hello.geek()
hello.geekster()
