let images = [];
let currentIndex = 0;

const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");

function openPopup(index){
    currentIndex = index;
    popupImg.src = images[currentIndex];
    popup.classList.add("active");
}
function nextImage(){
    if(currentIndex < images.length - 1){
        currentIndex++;
        popupImg.src = images[currentIndex];
    }

}

function prevImage(){
    if(currentIndex > 0){
        currentIndex--;
        popupImg.src = images[currentIndex];
    }
}

Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

const urlParams = new URLSearchParams(window.location.search);
const PubId = urlParams.get("Pub");

const ImagesInPub = Parse.Object.extend("Z_IMAGES_IN_PUB");
const query = new Parse.Query(ImagesInPub);

const PubPointer = new Parse.Object("Z_PUB");
PubPointer.id = PubId;

query.equalTo("PUB", PubPointer);
query.include("IMAGE");

query.find().then(results => {

    const grid = document.getElementById("pubs-grid");

    results.forEach((item, index) => {

    const imageObj = item.get("IMAGE");
    const imageFile = imageObj.get("IMAGE");
    const imageUrl = imageFile.url();

// store url
     images.push(imageUrl);
     const card = document.createElement("div");
     card.className="image-card";
     card.innerHTML = `<img src="${imageUrl}" loading="lazy">`;
     grid.appendChild(card);
     card.addEventListener("click", () => {
            openPopup(index);
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
