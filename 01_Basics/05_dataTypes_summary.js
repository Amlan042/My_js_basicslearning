//Primitive data types -- 7 types
// String, Number, Boolean, null, Undefined, Symbol, BigInt  
//Note : decimal values are included in Number(no special data type for that)

//Symbols => used for uniqueness
const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
console.log(id === anotherId);  //reats both the consts as unique values after using symbol

const bigNum = 476847498404468474949n; //bigint  use n after the number
console.log(bigNum);

const myArr = ["Amlan", "Sumit", "Sourav"];

const myObj = {
    name: "Amlan",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction); //returns function but actually it is   object Function
console.log(bigNum);  //it does not return any type for bigInt


//Reference data types/Non-primitive data types
// Arrays, Objects, Functions

//JS is a dynamically  typed language


//<===============MEMORIES======================>
//stack(Primitive),Heap(Non-primitive)

let  mychannelname = "AmlanChannel1"
let Anothername = mychannelname     //here one copy of the variable myChannelName is provided to anothername in the Stack
Anothername = "Amlan.cuChannel2"    //changing the anothername

console.log(mychannelname);
console.log(Anothername);

let Person1 = {
    email: "amlan654@gmail.com",
    upi: "153653@ybl"
}
let Person2 = Person1;
Person2.email = "amlan478@hotmail.com"
 
console.log(Person2.email);
console.log(Person1.email);  //the email of person1 will change because both person1 and person2
//are referencing to the same object created in the heap memory


