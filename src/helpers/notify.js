import Notiflix from 'notiflix';

export function notifyMessage(length, pageNumber, totalHits) {
  if (length === 0) {
    return Notiflix.Notify.info(
      'Sorry, there are no images matching your search query. Please try again.',
      {
        timeout: 3000,
        position: 'center-bottom',
      }
    );
  }
  if (pageNumber === 1) {
    Notiflix.Notify.success(`We found ${totalHits} images.`, {
      timeout: 1500,
      position: 'center-bottom',
    });
  }

  if (pageNumber === 12) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results.",
      {
        timeout: 2000,
        position: 'center-bottom',
      }
    );
  }
}

