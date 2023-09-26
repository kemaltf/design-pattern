const calc = () => {
    return 4 * 3
}

let aNumber = calc();
console.log(aNumber)

// What is a callback and its role? 
// In its simplest terms, a callback function is a function that is called inside of another function. 

const printCalc = (callback) =>{
    console.log(callback())
}

printCalc(calc)