Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/"; 

const urlParams = new URLSearchParams(window.location.search);
const galleryId = urlParams.get("gallery");

const ImagesInGallery = Parse.Object.extend("Z_IMAGES_IN_GALLERY");
const query = new Parse.Query(ImagesInGallery);

const galleryPointer = new Parse.Object("Z_GALLERY");
galleryPointer.id = galleryId;

query.equalTo("GALLERY", galleryPointer);
query.include("IMAGE");

query.find().then(results => {

const grid = document.getElementById("images-grid");

results.forEach(item => {

const imageObj = item.get("IMAGE");
const imageFile = imageObj.get("IMAGE");
const imageUrl = imageFile.url();

const card = document.createElement("div");
card.className="image-card";

card.innerHTML = `<img src="${imageUrl}">`;

grid.appendChild(card);

card.addEventListener("click", () => {
openPopup(imageUrl);
});

});

});


document.addEventListener("DOMContentLoaded", () => {

document.addEventListener("keydown", e => {
    if(!popup.classList.contains("active")) return;

    if(e.key === "ArrowRight"){
        nextImage();
    }

    if(e.key === "ArrowLeft"){
        prevImage();
    }

    if(e.key === "Escape"){
        popup.classList.remove("active");
    }
});

popup.addEventListener("dblclick", () => {
    popup.classList.remove("active");
});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing popup
    prevImage();
});

rightArrow.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing popup
    nextImage();
});

});
