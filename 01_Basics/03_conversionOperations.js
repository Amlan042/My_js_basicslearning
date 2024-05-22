let score = "33abc"
let score1 = null;
let score2 = undefined;
let score3 = false;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// let valueInNumber1 = Number(score1)
// console.log(valueInNumber1);    //the number will be 0 for null
// console.log(typeof valueInNumber1);

let valueInNumber2 = Number(score2)
console.log(valueInNumber2);  //will be NaN for undefined values
console.log(typeof valueInNumber2);

// let valueInNumber3 = Number(score3)
// console.log(valueInNumber3);
// console.log(typeof valueInNumber3);

//CONVERTING TO NUMBERS
//so, "33"  => 33
//"33abd" => NaN
//null => object
//undefined => NaN
//true => 1 ; false => 0


let isLoggedIn = "";
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(boolIsLoggedIn));
console.log(boolIsLoggedIn)

//0 => false;  => true
//"" => false; "Amlan" => true

let num = 33
let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)