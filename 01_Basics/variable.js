const accountID = 39;
let accountEmail = "rajat@gmail.com";
var accountPassword = "raj";
/*
Prefer not to use VAR
Because of issue in block scope and funtional scope.
*/
accountCity = "Chandigarh";
let accountStatus;

//accountID = 47; // NOT ALLOWED

accountEmail = "rj@gmail.com";
accountPassword = "rajat12";
accountCity = "Chd";

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountStatus]);