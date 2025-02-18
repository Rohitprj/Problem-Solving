async function getData() {
  try {
    const uri = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
