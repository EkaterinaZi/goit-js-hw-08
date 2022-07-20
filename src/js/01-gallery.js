// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryEl = galleryItems
    .map(({ description, original, preview }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`)
    .join('');
    
gallery.insertAdjacentHTML("beforeend", galleryEl);

let galleryLibrary = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});