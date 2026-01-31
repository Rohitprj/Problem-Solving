// Type Assertion-------------------------------------------------

let response: any = "404";
let numLength: number = (response as string).length;
console.log(numLength);

// Defined type of a response data--------------------------------
type User = {
  name: string;
  password: number;
};

let data = '{"name": "Rohit", "Password": 123456 }';
let dataObj = JSON.parse(data) as User;
console.log(dataObj);

// With any-------------------------------------------------------
let a: any;

a = "code";
a = [1, 2, 3];
a = 10;

console.log(a.toUpperCase());

// With unknown---------------------------------------------------
let b: unknown;

b = "code";
b = [1, 2, 3];
b = 10;

if (typeof b === "string") {
  b.toUpperCase();
  console.log(b.toUpperCase());
}

// Type guarding --------------------------------------------------
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);
}

// Type Assertion--------------------------------------------------
const res: unknown = "Server is running";
const strData: string = res as string;

// Type never------------------------------------------------------

type Role = "admin" | "user" | "superadmin";

function assignRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirect to admin dashboard");
    return;
  } else if (role === "user") {
    console.log("Redirect to user dashboard");
    return;
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
