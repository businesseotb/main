const gallery = document.getElementById("gallery");

// Example static images for testing
const testImages = [
  "https://via.placeholder.com/200x200.png?text=Image+1",
  "https://via.placeholder.com/200x200.png?text=Image+2",
  "https://via.placeholder.com/200x200.png?text=Image+3"
];

gallery.innerHTML = ""; // Clear loading text

testImages.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  gallery.appendChild(img);
});
