let name = '   Sandeep Sekhon  ';

//length property
console.log(name.length);

//convert to uppercase
console.log(name.toUpperCase());

//convert to lowercase
console.log(name.toLowerCase());

//includes method
let password = 'abc123passwoee98';
console.log(password.includes('password'));

//trim method
console.log(name.trim());

//challenge
const isValidPassword = function(password) {
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asd'));
console.log(isValidPassword('asddsvfrgdv'));
console.log(isValidPassword('asfhdhdhdpassword'));


