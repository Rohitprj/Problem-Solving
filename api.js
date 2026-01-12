// async function apiHandling() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   console.log("Data", JSON.stringify(data, null, 2));
// }
// apiHandling();

async function apiHandling() {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
apiHandling();
