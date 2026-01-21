// Variables = Data Containers
// JavaScript variables are containers for data.

// JavaScript variables can be declared in 3 ways:

// Modern JavaScript          Older JavaScript
// Using let                  Using var (Not Recommended)
// Using const

// Let Variables
// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope
{
  let a = 10;
  console.log(a);
}

{
  const name = "web development";
}

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

// const Variables
// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

// let name = "Rohit";
// function printName() {
//   console.log(name);
// }
// printName();

// {
//   const name = "Rohit";
//   console.log(name);
// }
// const name = "John";
// console.log(name);

// let a = "Rohit";
// var b = "Kumar"; // Not Recommended
// const c = "MCA";
// c = "John";
// console.log(a, b, c);
