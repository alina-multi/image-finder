export function appendMarkup(ref, markup) {
  ref.insertAdjacentHTML('beforeend', markup);
}
  

export function createMarkup(array, createHtml) {
  return array.reduce((acc, item) => acc + createHtml(item), '');
}