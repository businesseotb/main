console.log("showcomic.js loaded");

Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

console.log("Parse initialized");

const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get("comic");

console.log("comicId:", comicId);

const ImagesInComic = Parse.Object.extend("Z_IMAGES_IN_COMIC");
const query = new Parse.Query(ImagesInComic);

console.log("Query created");

const comicPointer = new Parse.Object("Z_COMICS");
comicPointer.id = comicId;

console.log("Pointer created");

query.equalTo("COMIC", comicPointer);
query.include("IMAGE");

console.log("Query configured");

query.find()
.then(results => {

console.log("Results:", results);

const grid = document.getElementById("comics-grid");

results.forEach(item => {

const imageObj = item.get("IMAGE");
const imageFile = imageObj.get("IMAGE");
const imageUrl = imageFile.url();

const card = document.createElement("div");
card.className="image-card";

card.innerHTML = `<img src="${imageUrl}">`;

grid.appendChild(card);

});

})
.catch(error => {
console.error("Parse query error:", error);
});
