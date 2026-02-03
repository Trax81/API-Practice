// http://www.omdbapi.com/?i=tt3896198&apikey=11a85b25

const input = document.querySelector(".search-input");
const button = document.querySelector(".search-btn");
const resultsContainer = document.querySelector(".results");

button.addEventListener("click", async () => {
  const searchValue = input.value;

  const response = await fetch(
    `http://www.omdbapi.com/?s=${searchValue}&apikey=11a85b25`
  );

  const data = await response.json();

  console.log(data);
});

resultsContainer.innerHTML = "";

data.Search.forEach(movie => {
  resultsContainer.innerHTML += `
    <div >
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <h4>${movie.Title}</h4>
      <h5>Year: <span>${movie.Year}</span></h5>
      <h5>Type: <span>${movie.Type}</span></h5>
    </div>
  `;
});