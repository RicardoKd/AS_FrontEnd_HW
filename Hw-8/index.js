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
  const container = document.createElement("div");
  container.classList.add("container");

  const titleContainer = document.createElement("div");
  const directorContainer = document.createElement("div");
  const releaseDateContainer = document.createElement("div");

  const titleContainerName = document.createElement("p");
  const directorContainerName = document.createElement("p");
  const releaseDateContainerName = document.createElement("p");

  titleContainerName.classList.add("ulTitle");
  directorContainerName.classList.add("ulTitle");
  releaseDateContainerName.classList.add("ulTitle");

  titleContainerName.innerText = "Film Title";
  directorContainerName.innerText = "Director";
  releaseDateContainerName.innerText = "Release Date";

  const TitleUl = document.createElement("ul");
  const DirectorUl = document.createElement("ul");
  const releaseDateUl = document.createElement("ul");

  json.forEach((elem) => {
    const titleLi = document.createElement("li");
    const DirectorLi = document.createElement("li");
    const releaseDateLi = document.createElement("li");

    titleLi.innerText = elem.title;
    TitleUl.append(titleLi);

    DirectorLi.innerText = elem.director;
    DirectorUl.append(DirectorLi);

    releaseDateLi.innerText = elem.release_date;
    releaseDateUl.append(releaseDateLi);
  });

  container.append(titleContainer);
  container.append(directorContainer);
  container.append(releaseDateContainer);

  titleContainer.append(titleContainerName);
  directorContainer.append(directorContainerName);
  releaseDateContainer.append(releaseDateContainerName);
  titleContainer.append(TitleUl);
  directorContainer.append(DirectorUl);
  releaseDateContainer.append(releaseDateUl);

  document.body.append(container);
};

loadJSON("https://swapi.dev/api/films").then(
  (result) => {
    console.log(result);
    loadToScreen(result);
  },
  (error) => console.log(error),
);
