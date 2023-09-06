import { notifyMessage } from './helpers/notify.js';
import { pixabayApi } from './api/pixabay';
import { appendGallery } from '../src/markup/gallery.js';
import { refs } from './utils/refs.js';

const { input, gallery } = refs;

export function onSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  pixabayApi.resetPage();
  const inputValue = e.currentTarget.elements.searchQuery.value;

  if (inputValue.trim() === '') {
    return;
  }

  pixabayApi.query = inputValue.trim();
  pixabayApi
    .fetchData()
    .then(array => {
      console.log(array);
      appendGallery(array);
      notifyMessage(array.hits.length, pixabayApi.pageNumber, array.totalHits);
    })
    .catch(error => {
      console.log(error);
    });

  input.value = '';
}


