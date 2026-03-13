// Initialize Back4App
Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

// Reference to gallery container
const galleryGrid = document.getElementById("gallery-grid");

// Query Z_GALLERY table
const Z_GALLERY = Parse.Object.extend("Z_GALLERY");
const query = new Parse.Query(Z_GALLERY);

query.find().then((results) => {
  galleryGrid.innerHTML = ""; // clear loading text

  results.forEach((gallery) => {
    const name = gallery.get("NAME");
    const imageUrl = gallery.get("IMAGE");

    // Create the square
    const square = document.createElement("div");
    square.className = "gallery-square";

    // Create image element
    const img = document.createElement("img");
    img.src = imageUrl;

    // Create overlay with name
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = name;

    // Append image and overlay to square
    square.appendChild(img);
    square.appendChild(overlay);

    // Append square to grid
    galleryGrid.appendChild(square);
  });
}).catch((error) => {
  galleryGrid.innerHTML = "Failed to load galleries: " + error.message;
});
