// TypeScript Notes: Interfaces & Generics (Hinglish)

// --------------------------------------------------
// 1. INTERFACES IN TYPESCRIPT
// --------------------------------------------------

// Simple Meaning:
// Interface ek blueprint hota hai jo object ka structure define karta hai.
// Matlab object me kaunse fields honge aur unka type kya hoga.

// --------------------------------------------------
// Basic Example:
// --------------------------------------------------

interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Rohit",
  age: 22,
};

// --------------------------------------------------
// Error Example (commented to avoid TS error):
// --------------------------------------------------

/*
const user2: User = {
  name: "Rohit",
  // ❌ Error: age missing hai
};
*/

// --------------------------------------------------
// Real Project Example (React Native):
// --------------------------------------------------

interface Product {
  id: string;
  title: string;
  price: number;
}

const productList: Product[] = [
  { id: "1", title: "Shoes", price: 2000 },
  { id: "2", title: "Watch", price: 5000 },
];

// --------------------------------------------------
// Optional Property:
// --------------------------------------------------

interface UserWithOptionalAge {
  name: string;
  age?: number;
}

const user3: UserWithOptionalAge = {
  name: "Amit",
};

// --------------------------------------------------
// Functions in Interface:
// --------------------------------------------------

interface Login {
  (email: string, password: string): boolean;
}

const loginUser: Login = (email, password) => {
  return email === "test@gmail.com";
};

// --------------------------------------------------
// 2. GENERICS IN TYPESCRIPT
// --------------------------------------------------

// Simple Meaning:
// Generic ka matlab hai reusable code jo kisi bhi type ke saath kaam kare.

// --------------------------------------------------
// Without Generic:
// --------------------------------------------------

function printStringData(data: string) {
  return data;
}

// --------------------------------------------------
// With Generic:
// --------------------------------------------------

function printData<T>(data: T): T {
  return data;
}

// --------------------------------------------------
// Usage Example:
// --------------------------------------------------

const str = printData<string>("Hello");
const num = printData<number>(123);
const bool = printData<boolean>(true);

// --------------------------------------------------
// Real Example (API Response):
// --------------------------------------------------

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface ApiUser {
  name: string;
  age: number;
}

const response: ApiResponse<ApiUser> = {
  success: true,
  data: {
    name: "Rohit",
    age: 22,
  },
};

// --------------------------------------------------
// React Native Example:
// --------------------------------------------------

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => void;
}

// Example usage
const numberListProps: ListProps<number> = {
  data: [1, 2, 3],
  renderItem: (item) => {
    console.log(item);
  },
};

// --------------------------------------------------
// Interface vs Generics:
// --------------------------------------------------

// Interface:
// - Object ka structure define karta hai
// - Fixed shape hoti hai

// Generics:
// - Code reusable banata hai
// - Dynamic type support karta hai

// --------------------------------------------------
// Real Life Analogy:
// --------------------------------------------------

// Interface:
// Form ka format jisme fields fixed hote hain (name, age, email)

// Generics:
// Bottle jisme kuch bhi daal sakte ho (water, juice, etc.)

// --------------------------------------------------
// Summary:
// --------------------------------------------------

// Interface -> Shape define karta hai
// Generics -> Reusability aur flexibility deta hai
