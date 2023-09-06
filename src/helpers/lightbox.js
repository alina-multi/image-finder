import SimpleLightbox from 'simplelightbox';

export let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 0,
  captionPosition: 'bottom',
  fadeSpeed: 200,
});

lightbox.on('show.simplelightbox', function () {});
