//Descriptive Analysis Task

//Measures of Central Tendency (Mean, Median and Mode)



//input value by user

let a= prompt("Please enter your first number");
let b= prompt("Please enter another number");
let c= prompt("Please enter another number");
let d= prompt("Please enter another number");
let e= prompt("Please enter your last number");


const myArray = [Number(a),Number(b),Number(c),Number(d),Number(e)]
console.log("Here is your Data [" + (myArray)+ ']');



//-----------Calculating for Mean---------------------

function mean(myArray) {
    let sum=0;
    
    for (let num of myArray) {
        sum +=num;
    }
    return(sum/myArray.length);
}
console.log("Mean = " + mean(myArray));




//----------Calculating for median-------------

function median(myArray) {
    myArray = myArray.sort((a,b) => a -b);
    if (myArray.length % 2 !== 0 ) {
         return myArray[Math.floor(myArray.length / 2)]
    } else{
        let mid1 = myArray[myArray.length / 2];
        let mid2 = myArray[myArray.length / 2-1];
        return[mid1, mid2];
        return[mid1 + mid2 / 2];
    }
   
}
console.log("Sorted Array = [" + myArray.sort((a,b) => a -b) + "]")
console.log("Median = " + median(myArray));



//----------------Calculating for mode--------------

function mode(myArray) {
    const myArrayObj = {}

    myArray.forEach(elem => {
        if(!myArrayObj[elem]) myArrayObj[elem] = 0
        myArrayObj[elem]++ 
    });
    
    let result = []
    let max = 0

    for(let key in myArrayObj) {
         if (myArrayObj[key] > max) {
            result = [key]
            max = myArrayObj[key]
         } else if(myArrayObj[key] === max) {
            result.push(key)
         }
    }
    if(Object.keys(myArray).length === result.length) {
        result = []
    }
    return result;
}
console.log("Mode = " + mode(myArray));
