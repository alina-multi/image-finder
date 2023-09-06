import { appendMarkup, createMarkup } from './markupHelpers.js';
import { refs } from '../utils/refs.js';
const tagsArray = [
  'nature',
  'fashion',

  'animals',
  'food',
  'backgrounds',
  'science',
  'education',
  'people',
  'feelings',
  'religion',
];

const createTag = tag => {
  return `
      <li class="tag-list__item">
      <button  type="button" data-action="search" data-value="${tag}">${tag}</button>
      </li>
      `;
};

appendMarkup(refs.tagsContainer, createMarkup(tagsArray, createTag));
