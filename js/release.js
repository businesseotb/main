// Initialize Back4App
Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

// Reference to release container
const releaseGrid = document.getElementById("release-grid");

// Query release table
const release = Parse.Object.extend("Z_PUB");
const query = new Parse.Query(release);

query.find().then((results) => {
  releaseGrid.innerHTML = ""; // clear loading text

results.forEach((release) => {
  const name = release.get("NAME");
  const imageFile = release.get("IMAGE"); // this is a Parse.File
  const imageUrl = imageFile ? imageFile.url() : ""; // get the actual URL

  const square = document.createElement("div");
  square.className = "release-square";

  const img = document.createElement("img");
  img.src = imageUrl;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = name;

  square.appendChild(img);
  square.appendChild(overlay);
  square.addEventListener("click", () => {
    const releaseId = release.id;
    window.location.href = `showreleas.html?release=${releaseId}`;
  });
  releaseGrid.appendChild(square);

  
});
}).catch((error) => {
  releaseGrid.innerHTML = "Failed to load galleries: " + error.message;
});
