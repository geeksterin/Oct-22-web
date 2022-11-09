// // const obj = {} // empty object
// // const obj2 = {
// //     key: "value",
// //     key2: "value 2",
// //     key3: "value 3",
// //     key4: "value 4",
// //     key5: "value 5",
// // }
// // const obj3 = {
// //     key: "value",
// //     key: "value 2",
// //     key: "value 3",
// //     key4: "value 4",
// //     key5: "value 5",
// // }
// const obj3 = {
//     name2: {
//         school: "abc",
//         session:"29102"
//     },
//     age: 21,
//     education: {
//             school:"yadu",
//             class: "12th",
//             year: "2017-2018"
//     },
//     arr: [1,2,3,4,5,6,7,8],
//     arrOfObj:[
//         {
//             skills:"HTML/CSS",
//             projects:"15",
//             exp:"2yr+"
//         },
//         {
//             skills:"ReactJS",
//             projects:"6",
//             exp:"1.5yr+"
//         },
//         {
//             skills:"ThreeJS",
//             projects:"2",
//             exp:"3 mnths"
//         },
//         {
//             skills:"JS",
//             projects:"3",
//             exp:"2yr+"
//         },
//         {
//             skills:"JS",
//             projects:"3",
//             exp:"2yr+"
//         },
//     ],
//     arrOfArr:[
//         [1,2,3,43,45,5],
//         ["sadfa", "asdfdaf", "avdv", "dsagvd"]
//     ],
// }

// console.log(obj3.arrOfArr[0][1]);
// // console.log(obj3.arrOfObj[0]);

// // var a = `hello i am \n rishabh`
// // console.log(typeof(obj3));
// console.log(obj3);
// // console.log(a);

// for (let index = 0; index < obj3.arrOfObj.length; index++) {
//     const element = obj3.arrOfObj[index];
//     // console.log(element.projects);    
// }







const obj = {
    arrOfobjOfArr: [
        {arr1: [{key1:"value1",key2:"value2"}], arr2: [{key1:"value3",key2:"value4"}],},
        {arr1: [{key1:"value5",key2:"value6"}], arr2: [{key1:"value7",key2:"value8"}],},
    ]
}
for (let index = 0; index < obj.arrOfobjOfArr.length; index++) {
    const ele = obj.arrOfobjOfArr[index];

    // console.log(ele);
    // console.log(ele.arr1);
    // console.log(ele.arr1[0]);
    console.log(ele.arr1[0].key1);
    console.log(ele.arr1[0].key2);
    console.log(ele.arr2[0].key1);
    console.log(ele.arr2[0].key2);
}

// for (let index = 0; index < obj.arrOfobjOfArr.length; index++) {
//     const elements = obj.arrOfobjOfArr[index];
//     // console.log(element.arr1);
//     for (let index = 0; index < elements.arr1.length; index++) {
//         const element = elements.arr1[index];
//         // console.log(element);
//         console.log(element.key1);
//         console.log(element.key2);
//     }
// }



