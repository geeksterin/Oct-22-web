// if (here comes your condition eg. a>b) {
//     here comes your code to be executed when your condition is true
// }

a = 98
b = 98
if(a>b){
    console.log("a is greater");
}if(a<b){
    console.log("b is greater");
}else{
    console.log("numbers are equal");
}

var maths = 0 
var science = 0 
var hindi = 0 
var eng = 0 
var sst = 0 
var sanskrit = 285 
var total =( maths + science + hindi + eng +sst + sanskrit)/6
console.log(total);

// var total2 = maths + science + hindi + eng +sst + sanskrit
// var total = `${maths}` + `${science}` + `${hindi}` + `${eng}` +`${sst}` + `${sanskrit}`
// var total3 = maths + "" + science
// var total4 = `${maths}`
// var total5 = maths, science, hindi
// var total6 = `${maths}`+ `${science}`+ `${hindi}`

// console.log("total", total);
// console.log("total", total2);
// console.log("total", total3);
// console.log("total", typeof(total4));
// console.log("total5", total5);

// if(total>90){
//     console.log("hey you got a+ grade");
// }else if(total>80 && total<=90){
//     console.log("hey you got a grade");
// }else if(total>70 && total<=80){
//     console.log("hey you got b+ grade");
// }else if(total>60 && total<=70){
//     console.log("hey you got b grade");
// }else if(total>50 && total<=60){
//     console.log("hey you got c+ grade");
// }else if(total>40 && total<=50){
//     console.log("hey you got c grade");
// }else if(total>30 && total<=40){
//     console.log("hey you got d grade");
// }else{
//     console.log("re lag gyi teri ");
// }

if(total>90){
    console.log("hey you got a+ grade");
}if(total>80 && total<=90){
    console.log("hey you got a grade");
}if(total>70 && total<=80){
    console.log("hey you got b+ grade");
}if(total>60 && total<=70){
    console.log("hey you got b grade");
}if(total>50 && total<=60){
    console.log("hey you got c+ grade");
}if(total>40 && total<=50){
    console.log("hey you got c grade");
}if(total>30 && total<=40){
    console.log("hey you got d grade");
}else{
    console.log("re lag gyi teri ");
}

suhanaMausam = false
suhanaMausam ? console.log("mausam suhana hai") : console.log("chal jhoote")