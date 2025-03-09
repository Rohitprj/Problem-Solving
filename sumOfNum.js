function sumOfNum(num) {
  if (num < 0) {
    throw new Error("It only takes num greater than one");
  }
  let s = 0;
  const b = num.toString();
  const c = b.split("");
  c.forEach((e) => {
    s = s + parseInt(e);
  });
  console.log(s);
}
sumOfNum(18);
