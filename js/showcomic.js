Parse.initialize("AZ2atrslozmQ8GUb7iNfjuRQfpLI5WffQ4w8NCka", "mL8fa0LBZssoy82vPwQmtvW2Tz7IdpZBj9PfMASb");
Parse.serverURL = "https://parseapi.back4app.com/";

const urlParams = new URLSearchParams(window.location.search);
const comicId = urlParams.get("comic");

console.log("comicId:", comicId);

const ImagesInComic = Parse.Object.extend("Z_IMAGES_IN_COMIC");
const query = new Parse.Query(ImagesInComic);

const comicPointer = new Parse.Object("Z_COMICS");
comicPointer.id = comicId;

query.equalTo("COMIC", comicPointer);
query.include("IMAGE");

// sort pages
query.descending("PAGE");

query.find().then(results => {

const grid = document.getElementById("comics-grid");

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

const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");

function openPopup(index){

currentIndex = index;

popupImg.src = images[currentIndex];

popup.classList.add("active");

}

popup.addEventListener("click", () => {
popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {

const clickX = e.clientX;
const width = window.innerWidth;

if(clickX > width / 2){
nextImage();
}else{
prevImage();
}

});


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

popup.addEventListener("dblclick", () => {
popup.classList.remove("active");
});
