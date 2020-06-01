async function loadJSON(url) {
  /*eslint-env browser*/
  const response = await fetch(url);
  if (response.status === 200) {
    const json = await response.json();
    // Return an array of objects. Each object is a film
    return json.results;
  }
  throw new Error(response.status);
}

const loadToScreen = (json) => {
  let titleLi = "";
  let directorLi = "";
  let releaseDateLi = "";
  json.forEach((elem) => {
    titleLi += `<li>${elem.title}</li>`;
    directorLi += `<li>${elem.director}</li>`;
    releaseDateLi += `<li>${elem.release_date}</li>`;
  });

  const titleDivHTML = `<div><p class='ulTitle'>Film Title</p><ul>${titleLi}</ul></div>`;
  const directorDivHTML = `<div><p class='ulTitle'>Director</p><ul>${directorLi}</ul></div>`;
  const releaseDateHTML = `<div><p class='ulTitle'>Release Date</p><ul>${releaseDateLi}</ul></div>`;

  document.body.innerHTML += `<div class="container">${titleDivHTML}${directorDivHTML}${releaseDateHTML}</div>`;
};

loadJSON("https://swapi.dev/api/films").then(
  (result) => {
    console.log(result);
    loadToScreen(result);
  },
  (error) => console.log(error),
);
