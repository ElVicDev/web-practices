const mainElement = document.querySelector("main");
async function getFilms() {
  // Usar live Server en Visual Studio Code para obtener los datos de las películas
  const filmsPromise = await fetch("./films.json");
  const films = await filmsPromise.json();

  //films.sort((a, b) => (a.title > b.title ? 1 : -1));
  console.log(films);
  /* films.forEach(function (eachFilm) {
    createCard(eachFilm);
  }); */
}

getFilms();

function createCard(data) {
  const card = document.createElement("article");
  const movieTitle = document.createElement("h2");
  const movieTitleTxt = document.createTextNode(data.title);
  movieTitle.appendChild(movieTitleTxt);

  const director = document.createElement("p");
  const directorTxt = document.createTextNode(`Director: ${data.director}`);
  director.appendChild(directorTxt);

  const year = document.createElement("p");
  const yearTxt = document.createTextNode(`Released: ${data.release_date}`);
  year.appendChild(yearTxt);

  const description = document.createElement("p");
  const descriptionTxt = document.createTextNode(data.description);
  description.appendChild(descriptionTxt);

  const rating = document.createElement("p");
  const ratingTxt = document.createTextNode(
    `Rotten Tomatoes Score: ${data.rt_score}`
  );
  rating.appendChild(ratingTxt);

  card.appendChild(movieTitle);
  card.appendChild(director);
  card.appendChild(year);
  card.appendChild(description);
  card.appendChild(rating);

  mainElement.appendChild(card);
}
