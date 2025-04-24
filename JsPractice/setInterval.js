// let i = 1;
// const interval = setInterval(() => {
//   console.log(i);
//   i++;
//   if (i > 10) {
//     clearInterval(interval);
//   }
// }, 1000);

let i = 1;
const interval = () => {
  console.log(i);
  i++;
  if (i > 10) {
    clearInterval(stop);
  }
};
const stop = setInterval(interval, 1000);
