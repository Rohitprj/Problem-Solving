function outer() {
  const name = "Rohit";
  function inner() {
    console.log(name);
  }
  return inner;
}
const funCall = outer();
funCall();
