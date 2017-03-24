// Each of the following blocks of JavaScript contains errors.
// Take a look at each and do the following:
// Identify which line the error occurs on.
// Explain the cause of the error
// Fix the error, so the code produces the desired response.

var firstName = 'Julia'
var lastName = 'Roberts'
var fullName = firstName + ' ' + lastName // there is a SyntaxError 'lastname' should be camel case and is trying to concatenate firstName and lastName without adding a space.

console.log(fullName) // Julia Roberts

var yearBorn = 1975
var currentYear = 2016
var age = currentYear - yearBorn // there is a SyntaxError 'Var' should be lower case.

console.log(age) // 41
