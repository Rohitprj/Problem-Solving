// Type Assertion

let response: any = "404";
let numLength: number = (response as string).length;
console.log(numLength);

// Defined type of a response data
type User = {
  name: string;
  password: number;
};

let data = '{"name": "Rohit", "Password": 123456 }';
let dataObj = JSON.parse(data) as User;
console.log(dataObj);

let a: any;

a = [1, 2, 3];
a = "code";

console.log(a.toUpperCase());
