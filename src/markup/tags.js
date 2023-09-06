import { appendMarkup, createMarkup } from './markupHelpers.js';
import { refs } from '../utils/refs.js';
import { pixabayApi } from '../api/pixabay';
import { appendGallery } from './gallery.js';
import { refs } from '../utils/refs.js';

const { gallery } = refs;

const tagsArray = [
  'popular',
  'nature',
  'fashion',
  'animals',
  'food',
  'backgrounds',
  'science',
  'education',
  'people',
  'feelings'
];

const createTag = tag => {
  return `
      <li class="tag-list__item">
      <button id=${tag} class="tag-button"  type="button" data-action="search" data-value="${tag}">${tag}</button>
      </li>
      `;
};


export function onTagFilter(e) {
  if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'BUTTON') {
    return;
  }
  const tag = e.target.dataset.value;

  if (pixabayApi.category === tag) {
    return;
  }

  const currentActiveBtn = document.querySelector('button.active');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('active');
  }
  e.target.classList.add('active');

  if (tag === 'popular') {
    pixabayApi.category = tag;
    pixabayApi.query = 'popular';
  } else {
    pixabayApi.category = e.target.dataset.value;
    pixabayApi.query = '';
  }

  pixabayApi
    .fetchData()
    .then(res => {
      (gallery.innerHTML = ''), appendGallery(res);
    })
    .catch(error => {
      console.log(error);
    });
}


appendMarkup(refs.tagsContainer, createMarkup(tagsArray, createTag));
