fetch("https://api.reddit.com/r/pics/hot.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
