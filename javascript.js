// http://www.omdbapi.com/?i=tt3896198&apikey=11a85b25

const input = document.querySelector(".search-input");
const button = document.querySelector(".search-btn");

button.addEventListener("click", async () => {
  const searchValue = input.value;

  const response = await fetch(
    `http://www.omdbapi.com/?s=${searchValue}&apikey=11a85b25`
  );

  const data = await response.json();
  console.log(data);
});
