function makeProtienShake(type: string, scoope: number) {
  return `Your ${type} shake with ${scoope} scoops is ready!`;
}

makeProtienShake("chocolate Protien", 2);

function getProtien(): number {
  // Function return type is number
  return 2;
}

function buyProtienShake(): void {
  // Function return type is void ( does not return anything )
  console.log("does not return anything");
}

// function orderProtien(type?: string) {
//   console.log(type);
// }
function orderProtien(type: string = "chocolate") {
  console.log(type);
}
