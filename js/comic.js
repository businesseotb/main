// Initialize Back4App
Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

const Comics = Parse.Object.extend("Z_COMICS"); 
const query = new Parse.Query(Comics);

query.find().then((results) => {
  const grid = document.getElementById("comic-grid");

  results.forEach((comic) => {
    const name = comic.get("NAME");
    const imageFile = comic.get("COVER"); // Back4App file
    const imageUrl = imageFile ? imageFile.url() : "";

    const card = document.createElement("div");
    card.className = "comic-card";

    card.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <div class="overlay">${name}</div>
    `;

    card.addEventListener("click", () => {
      const comicId = comic.id;
      window.location.href = `showgallery.html?gallery=${comicId}`;
    )
    }

    grid.appendChild(card);
  });
}).catch((error) => {
  console.error("Error fetching comics:", error);
});
