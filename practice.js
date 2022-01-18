var arr1 = [1,2,3,4]
var arr2 = [1,2,3,4]

arr1.forEach(arr1_element => {
    for (let index = 0; index < arr2.length; index++) {
        if (index==2) {
            console.log(arr1_element,arr2[index]); 
            console.log("close");
        }
    }
    // arr2.forEach((arr2_element)=>{
    //     if (arr2_element==3) {
    //         console.log(arr1_element,arr2_element);
    //     }
    //     // console.log(arr1_element,arr2_element);
    // })
});

// for (let index = 0; index < arr1.length; index++) {
//     for (let j = 3; j < arr2.length; j++) {
//         console.log(arr1[index],arr2[j]);

//         // console.log(j+" j");
//         break;
        
//     }
//     console.log("end of ");
// }