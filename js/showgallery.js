
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
