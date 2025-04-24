// WAP to check vovels in a word or sentence ?
// A E I O U

function checkVovls(word) {
  const check = word.match(/[aeiouAEIOU]/);
  console.log(check);
  //   return check ? check.length : 0;
}
checkVovls("Name");
// console.log(checkVovls("Rohit"));
