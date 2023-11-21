import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
  
    galleryItems.forEach(item => {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery__item');
  
      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;
  
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;
  
      link.appendChild(image);
      galleryItem.appendChild(link);
      gallery.appendChild(galleryItem);
    });
  
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',         // Wykorzystaj atrybut alt jako podpis
      captionDelay: 250,            // Opóźnienie przed pojawieniem si podpisu
      captionPosition: 'bottom',    // Pozycja podpisu
    });
  
   
  });

console.log(galleryItems);
