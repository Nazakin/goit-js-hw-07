import { galleryItems } from './gallery-items.js';
const galleryElement = document.querySelector('.gallery');
const gallery = galleryItems.map((image) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
  </li>
`);

galleryElement.innerHTML = gallery.join('');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
  // overlayOpacity: 0.7,
});