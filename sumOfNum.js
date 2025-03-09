function sumOfNum(num) {
  let s = 0;
  const b = num.toString();
  const c = b.split("");
  console.log(c);
  c.forEach((e) => {
    s = s + parseInt(e);
  });
  console.log(s);
}
sumOfNum(12);
