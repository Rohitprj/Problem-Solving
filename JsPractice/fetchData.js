async function getData() {
  try {
    const uri = "https://backend.rohitkumar.site/categories/allCategories";
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
