function outer() {
  let name = "Rohit";
  function inner() {
    let newName = "Rohit Kumar";
  }
  inner();
  console.log(newName);
}
