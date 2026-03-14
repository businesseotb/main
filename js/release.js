// Initialize Back4App
Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

// Reference to gallery container
const galleryGrid = document.getElementById("gallery-grid");

// Query release table
const release = Parse.Object.extend("Z_PUB");
const query = new Parse.Query(release);

query.find().then((results) => {
  galleryGrid.innerHTML = ""; // clear loading text

results.forEach((gallery) => {
  const name = gallery.get("NAME");
  const imageFile = gallery.get("IMAGE"); // this is a Parse.File
  const imageUrl = imageFile ? imageFile.url() : ""; // get the actual URL

  const square = document.createElement("div");
  square.className = "gallery-square";

  const img = document.createElement("img");
  img.src = imageUrl;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = name;

  square.appendChild(img);
  square.appendChild(overlay);
  square.addEventListener("click", () => {
    const galleryId = gallery.id;
    window.location.href = `showgallery.html?gallery=${galleryId}`;
  });
  galleryGrid.appendChild(square);

  
});
}).catch((error) => {
  galleryGrid.innerHTML = "Failed to load galleries: " + error.message;
});
