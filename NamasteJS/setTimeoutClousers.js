function b() {
  for (let i = 0; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
b();

// function a() {
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// a();

// with recursion

// function b(i=1) {
//     if(i>10) return;
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//       b(i+1);
// }
// b();
