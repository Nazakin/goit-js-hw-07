import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector('.gallery');
const gallery = galleryItems.map((image) => `
<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.preview}" />
   </a>
</li>
`);
galleryElement.innerHTML = gallery.join('');
galleryElement.addEventListener("click", (event) => {
  if (event.target.nodeName !== "A") {
    event.preventDefault();
    return;
  }
const selectedImage = event.target.dataset.source;



});
