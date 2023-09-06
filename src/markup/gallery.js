import { lightbox } from '../helpers/lightbox.js';
import { appendMarkup, createMarkup } from './markupHelpers.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../utils/refs.js';

const { gallery, btnLoadMore, loadMoreContainer } = refs;



export function createCard(array) {
  return `
   <a href="${array.largeImageURL}" class="gallery__item " >
    <div class="image-wrapper">  <img src="${array.webformatURL}" alt="${array.tags}" class="gallery__image simple-lightbox" loading="lazy"  /></div>
 
   
   <div class="info">
   <p class="info-item">
   <svg  class="info_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
  
    ${array.likes}
   </p>
  
   <p class="info-item">
   <svg  class="info_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
   <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
   <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
  </svg>
  ${array.views}
  </p>
  
  
  
  <p class="info-item">
  <svg class="info_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
  </svg>
   ${array.comments}
  </p>
  
  
  <p class="info-item">
  <svg class="info_icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z" clip-rule="evenodd" />
  </svg>
  
  ${array.downloads}
  </p>
  
   
  </div>
   </a>
   
  `;
}

export function appendGallery(array) {
  
  appendMarkup(gallery, createMarkup(array.hits, createCard));

  lightbox.refresh();

  if (array.hits.length <= 39) {
    btnLoadMore.style.visibility = 'hidden';
    loadMoreContainer.style.visibility = 'hidden';
  }
}


