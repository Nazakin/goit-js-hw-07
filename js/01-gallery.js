import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElement = document.querySelector('.gallery');
const gallery = galleryItems.map((image) => `
<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
`);

 //const link = document.querySelector('.gallery__link');
 // link.addEventListener("click", function(event){
// event.preventDefault();
// });
galleryElement.innerHTML = gallery.join('');
galleryElement.addEventListener("click", (event) => {
event.preventDefault();
if (event.target.nodeName !== "IMG") {
  return;
}
const selectedImage = event.target.dataset.source;

});




