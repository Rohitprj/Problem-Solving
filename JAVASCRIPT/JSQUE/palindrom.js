//  wow
// madam

function palindrom(str) {
  let a = 0;
  let b = str.length - 1;

  if (a < b) {
    while (str[a] !== str[b]) {
      return false;
    }
    a++;
    b--;
  }
  return true;
}

console.log(palindrom("madam"));
