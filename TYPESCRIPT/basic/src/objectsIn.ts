// let chai: {
//   name: string;
//   type: string;
//   isHot: boolean;
//   howMany: number;
// };

// chai = {
//   name: "goodChai",
//   type: "masala",
//   isHot: true,
//   howMany: 12,
// };

// type Coffee = {
//   name: string;
//   price: number;
//   ingredients: string[];
// };

// const bnaoCoffee: Coffee = {
//   name: "espresso",
//   price: 200,
//   ingredients: ["milk", "coffee", "whipCream"],
// };

//----------------------------------------------------------------------------------------------------------

// We can add extra values :-

type Nescafe = { time: number };

const coffee = { time: 5, beans: "Arabica" };

const makeCoffee: Nescafe = coffee;

//----------------------------------------------------------------------------------------------------------

// Utility Types in TS

type Chai = {
  name: string;
  type: string;
  isHot: boolean;
  howMany: number;
};
// Partial works with partial values
const updateChai = (updates: Partial<Chai>) => {
  console.log(`Preparing chai with ${updates}`);
};

updateChai({ name: "chai" });
updateChai({ isHot: true });
updateChai({});

type User = {
  name?: string;
  password?: number;
};

// Requires all values if its types are optional

const register = (data: Required<User>) => {
  console.log(`user data ${data}`);
};

register({ name: "User", password: 123 });
