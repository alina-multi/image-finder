// import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import { onSubmit } from './search.js';
import '../src/markup/tags.js';
import { onLoadMore } from '../src/markup/loadMore.js';
import { pixabayApi } from './api/pixabay';
import { appendGallery } from '../src/markup/gallery.js';
import { refs } from './utils/refs.js';
import { onTagFilter } from '../src/markup/tags.js';

const { form, btnLoadMore, tagsContainer, gallery } = refs;

pixabayApi
  .fetchData()
  .then(appendGallery)
  .catch(error => {
    console.log(error);
  });

form.addEventListener('submit', onSubmit);
btnLoadMore.addEventListener('click', onLoadMore);
tagsContainer.addEventListener('click', onTagFilter);

