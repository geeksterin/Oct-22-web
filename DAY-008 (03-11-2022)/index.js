
// function square(a,b){

//     let sq = a*b
//     return sq
// }
// var ans = square(2,3)

// for(var x=0; x<=ans; x++){
//     console.log(x);
// }


// a=10,b=0;
// b=a++; // b = a = a+1 //b=a ; a=a+1
// console.log(a); 
// console.log(b); 


// var h = square() 
// console.log(h);



// var mainFunc = function () {
//     var w = 10
//     return w
// }
// // var ans = mainFunc()
// for(var i=0; i<= mainFunc(); i++){
//     console.log(i);
// }

// hello()
// console.log(hello());
// function hello (){
//     console.log(10);
//     return 10
// }


    var name = "rishabh"
    var arrowFunction = () => {
        console.log("arrow this", this.name);
   }
    arrowFunction()
    
    function hello() {
        console.log("this", this.name);
    }
    hello()



// var obj = {
//     name:"rishabh",
//     arrow:()=>{
//         console.log(this)
//     },
//     hello(){
//         console.log(this.name)
//     }
// }

// obj.arrow()
// obj.hello()