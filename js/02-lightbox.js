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
galleryElement.innerHTML = gallery.join('');



console.log(galleryItems);
