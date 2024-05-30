const accountId = 12456
let accountEmail = "Rudraksh@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId=2  -> not allowed
accountEmail="asdf@gmail.com"
accountPassword="1233215"
accountCity="A"


/*
Prefer not use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState])