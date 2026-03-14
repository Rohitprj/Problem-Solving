/*
1️⃣ Basic Example

Interface

interface User {
  name: string;
  age: number;
}

Type

type User = {
  name: string;
  age: number;
}

Use:
const user: User = {
  name: "Rohit",
  age: 22
};

*/

/*

2️⃣ Extend / Inheritance
Interface me extend simple hota hai

interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

Use:
const admin: Admin = {
  name: "Rohit",
  role: "Admin"
};

Type me extend & se hota hai
type User = {
  name: string;
}

type Admin = User & {
  role: string;
}

 */

/*

3️⃣ Interface Merge ho sakta hai

Interface ko multiple times declare kar sakte ho.

interface User {
  name: string;
}

interface User {
  age: number;
}

TypeScript automatically merge karega:

const user: User = {
  name: "Rohit",
  age: 22
};

⚠️ Type me ye possible nahi hai

type User = {
  name: string;
}

type User = {   // ❌ Error
  age: number;
}

*/

/*

4️⃣ Type me extra powers hoti hain

Type unions bana sakta hai.

type Status = "success" | "error" | "loading";

Interface ye nahi kar sakta.

*/

/*
🔑 Simple Rule (Industry)

Mostly developers follow this rule:

✔ Interface → Objects / API response
✔ Type → Unions, primitives, complex types

 */
