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

const comicPointer = new Parse.Object("Z_COMIC");
comicPointer.id = comicId;

console.log("Pointer created");

query.equalTo("COMIC", comicPointer);
query.include("IMAGE");

console.log("Query configured");

query.find().then(results => {

console.log("Results:", results);

});
