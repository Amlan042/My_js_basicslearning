let score = "33abc"
let score1 = null;
let score2 = undefined;
let score3 = false;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// let valueInNumber1 = Number(score1)
// console.log(valueInNumber1);    //the number will be 0 for null
// console.log(typeof valueInNumber1);

let valueInNumber2 = Number(score2)
// console.log(valueInNumber2);  //will be NaN for undefined values
// console.log(typeof valueInNumber2);

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
// console.log(typeof(boolIsLoggedIn));
// console.log(boolIsLoggedIn)

//0 => false;  => true
//"" => false; "Amlan" => true

let num = 33
let stringNum = String(num)
// console.log(stringNum)
// console.log(typeof stringNum)

// <==================OPERATIONS==================>
    let value = 3
    let negvalue = -value
    // console.log(negvalue);

    // console.log(2**2);   //calulates 2 power 2

    str1 = "hello"
    str2 =" Amlan"
    str3 = str1 + str2
    // console.log(str3);

    // console.log(1 + "2")
    // console.log("1" + 2);

    // console.log("1" + 2 + 2); 
    // console.log(1 + "2" + 2);  //every number after the string will be converted to string
    // console.log(1 + 2 + "2");  

    // console.log(3 + 4 * 5 % 3)
    // console.log((3 + 4)*5 % 3)  //operator precedence is important

    //console.log(+ true);   //converts the true to number
    // console.log(+"");      //converts the empty string to its number value when we try to increment it

//    let str = ""
//    let num2 = Number(str)
//    console.log(num2);

// let num1, num2, num3
// num1 = num2 = num3 = 2+2  //this kind of code writing is allowed but not preferable

let gamePoints = 100;
//++gamePoints
gamePoints++
console.log(gamePoints);
