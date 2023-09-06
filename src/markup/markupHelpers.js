
import { pixabayApi } from '../api/pixabay';




export function appendMarkup(ref, markup) {

  ref.insertAdjacentHTML('beforeend', markup);

  if (pixabayApi.category === 'popular') {
    const activeButton = document.querySelector(`button[data-value=${pixabayApi.category}]`);
    activeButton.classList.add('active');
    return;
  }


}

export function createMarkup(array, createHtml) {

  return array.reduce((acc, item) => acc + createHtml(item), '');
}
