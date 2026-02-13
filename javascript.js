// http://www.omdbapi.com/?i=tt3896198&apikey=11a85b25

const input = document.querySelector(".search-input");
const button = document.querySelector(".search-btn");
const resultsContainer = document.querySelector(".results");

button.addEventListener("click", async () => {
  const searchValue = input.value;

  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchValue}&apikey=11a85b25`
  );

  const data = await response.json();

  resultsContainer.innerHTML = "";

  data.Search.forEach(movie => {

const poster = movie.Poster !== "N/A"
  ? movie.Poster
  : "./assets/Poster-Not-Available.jpg"; // your default image



    resultsContainer.innerHTML += `
    <div class="movie-card">
      <img class="movie-poster" src="${poster}" alt="${movie.Title}" />
      <div class="movie-info">
        <h4>${movie.Title}</h4>
        <h5>Year: <span>${movie.Year}</span></h5>
        <h5>Type: <span>${movie.Type}</span></h5>
      </div>
    </div>
  `;
  });
});