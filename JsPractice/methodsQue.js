const products = [
  { name: "Laptop", category: "Electronics", price: 1200, stock: 10 },
  { name: "Phone", category: "Electronics", price: 800, stock: 0 },
  { name: "Tablet", category: "Electronics", price: 500, stock: 5 },
  { name: "Monitor", category: "Electronics", price: 300, stock: 2 },
];
// 1. Filters out products that are out of stock (stock === 0).
// 2. Return the only name and price of remaining products.
// 3.  calculate the total price of all remaining products.

// 1
// const data = products.filter((item)=>item.stock===0)
// console.log(data);

// 2
// const data = products.filter((item) => item.stock != 0);
// console.log("1", data);

// const rem = data.map((prod) => {
//   return {
//     name: prod.name,
//     price: prod.price,
//   };
// });
// console.log("2", rem);

// // 3
// const total = rem.reduce((total, item) => total + item.price, 0);
// console.log("3", total);

// basics

const a = products.filter((item) => item.stock === 0);
// console.log(a);

const b = a.map((data) => {
  return { name: data.name, price: data.price };
});

console.log(b);
