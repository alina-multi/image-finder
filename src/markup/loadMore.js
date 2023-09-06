import {pixabayApi} from '../api/pixabay';
import { appendGallery } from './gallery';

export function onLoadMore() {
    pixabayApi.incrementpage();
    pixabayApi.fetchData().then(appendGallery);
  }