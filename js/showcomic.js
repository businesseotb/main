// Initialize Back4App
Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

// Reference to comic container
const comicGrid = document.getElementById("comic-grid");

// Query comic table
const comic = Parse.Object.extend("Z_COMIC");
const query = new Parse.Query(comic);

query.find().then((results) => {
  comicGrid.innerHTML = ""; // clear loading text

results.forEach((comic) => {
  const name = comic.get("COMIC");
  const imageFile = comic.get("IMAGE"); // this is a Parse.File
  const imageUrl = imageFile ? imageFile.url() : ""; // get the actual URL

  const square = document.createElement("div");
  square.className = "comic-square";

  const img = document.createElement("img");
  img.src = imageUrl;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = name;

  square.appendChild(img);
  square.appendChild(overlay);
  square.addEventListener("click", () => {
    const comicId = comic.id;
    window.location.href = `showreleas.html?comic=${comicId}`;
  });
  comicGrid.appendChild(square);

  
});
}).catch((error) => {
  comicGrid.innerHTML = "Failed to load galleries: " + error.message;
});
