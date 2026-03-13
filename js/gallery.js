const Images = Parse.Object.extend("Images");
const query = new Parse.Query(Images);

query.find().then((results) => {

  const gallery = document.getElementById("gallery");

  results.forEach((imgObj) => {

    const img = document.createElement("img");

    img.src = imgObj.get("image_url");

    gallery.appendChild(img);

  });

});
