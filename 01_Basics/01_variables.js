const accountId = 4647487
let accountEmail = "amlan4368@example.com"
var accountPassword = "4746*35"
accountCity = "Kolkata"  //variables can be declared without using any keyword but this is not preferable
let accoutState;   //java takes this as "undefiend"

// accountId = 346847 //changing const is not allowed
accountEmail = "Amlan468@hotmail.com"
accountPassword = "48479%737&"
accountCity = "Hyderabad"  

/*Prefer not to use var
bacause of issues in block scope and functional scope */

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accoutState])  //table is used to print the output in a tabular format
