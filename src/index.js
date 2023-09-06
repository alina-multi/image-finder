// import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/styles.css';
import { onSubmit } from './search.js';
import '../src/markup/tags.js';
import { onLoadMore } from '../src/markup/loadMore.js';
import {pixabayApi} from './api/pixabay';
import { appendGallery } from '../src/markup/gallery.js';
import { refs } from './utils/refs.js';

const { form, btnLoadMore, tagsContainer, gallery} = refs;


let loading = false;

pixabayApi.category = 'science';

pixabayApi
  .fetchData()
  .then(appendGallery)
  .catch(error => {
    console.log(error);
  });


  form.addEventListener('submit', onSubmit);
  btnLoadMore.addEventListener('click', onLoadMore);
  tagsContainer.addEventListener('click', onTagFilter);


  function onTagFilter(e) {

    if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'BUTTON') {
      return;
    }

    pixabayApi.category = e.target.dataset.value;
 
    pixabayApi.query = '';
    
    // Loader
    gallery.innerHTML = " <div class='loader'> LOADER</div>"

    pixabayApi
      .fetchData()
      .then((res) => { gallery.innerHTML="",   appendGallery(res)})
      .catch(error => {
        console.log(error);
      });
  
  }




