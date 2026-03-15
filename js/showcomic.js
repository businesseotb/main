Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

console.log("showcomic.js loaded");

const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get("comic");

const ImagesInComic= Parse.Object.extend("Z_IMAGES_IN_COMIC");
const query = new Parse.Query(ImagesInComic);

const comicPointer = new Parse.Object("Z_COMIC");
comicPointer.id = comicId;

query.equalTo("COMIC", comicPointer);
query.include("IMAGE");

query.find()
.then(results => {

console.log("results:", results);

const grid = document.getElementById("comics-grid");

results.forEach(item => {

const imageObj = item.get("IMAGE");

console.log("imageObj:", imageObj);

const imageFile = imageObj.get("IMAGE");

console.log("imageFile:", imageFile);

const imageUrl = imageFile.url();

const card = document.createElement("div");
card.className = "image-card";

card.innerHTML = `<img src="${imageUrl}">`;

grid.appendChild(card);

});

})
.catch(error => {
console.error("Query error:", error);
});

const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");

function openPopup(url){

popupImg.src = url;
popup.classList.add("active");

}

popup.addEventListener("click", () => {
popup.classList.remove("active");
});

document.addEventListener("contextmenu", e => e.preventDefault());
