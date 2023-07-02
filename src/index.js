import './css/styles.css';
import Notiflix from 'notiflix';
import PixabayAPI from "./pixabay";
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';
import "simplelightbox/dist/simple-lightbox.min.css"


const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form input");
const gallery = document.querySelector(".gallery");
const btnLoadMore = document.querySelector(".load-more");
const pixabayApi = new PixabayAPI();

 let lightbox = new SimpleLightbox('.gallery a',
    {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
    });
    lightbox.on('show.simplelightbox', function () {
});


form.addEventListener("submit", onSubmit);
btnLoadMore.addEventListener("click", onLoadMore);


function onSubmit(e) {
  e.preventDefault();
  clearGalleryContainer();
  pixabayApi.resetPage();
  const inputValue = e.currentTarget.elements.searchQuery.value;

  if (inputValue.trim() === '')
  { return; }


  pixabayApi.query = inputValue.trim();
  console.log(pixabayApi.fetchData())
  pixabayApi.fetchData().then(appendGallery).catch(error => {
      console.log("error");
  });;
  
  input.value = "";
  
}
 
function createContent(array) { 
  

 if (array.hits.length === 0) {
    return Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
  
  }
  if (pixabayApi.pageNumber === 1) { 
    Notiflix.Notify.success(`Hooray! We found ${array.totalHits} images.`);

  }

  if (gallery && array.total > 40 ) { 
     btnLoadMore.style.visibility = "visible";
  }

  if (pixabayApi.pageNumber === 12) {
    btnLoadMore.style.visibility = "hidden";
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
   }

 
}

function createGallery(array) { 
return array.hits.reduce((acc, arr) => acc + createCard(arr), "");
}

function appendGallery(array) { 
  createContent(array);
  const cards = createGallery(array);
  gallery.insertAdjacentHTML("beforeend", cards);
  lightbox.refresh();
}

function createCard (array) { 
  
    return ` <div class="photo-card">
 <a href="${array.largeImageURL}" class="gallery__item" > <img src="${array.webformatURL}" alt="${array.tags}" class="gallery__image" loading="lazy"  /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${array.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${array.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${array.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${array.downloads}</b>
    </p>
  </div>
</div>`;
    
};

function onLoadMore(e) { 
  pixabayApi.incrementpage();
  pixabayApi.fetchData().then(appendGallery);

}

function clearGalleryContainer() { 
gallery.innerHTML = ""
}







