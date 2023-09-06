import axios from 'axios';

export class Pixabay {
  constructor() {
    this.searchQuery = '';
    this.pageNumber = 1;
    this.category = '';

  }

  async fetchData() {

    const BASE_URL = `https://pixabay.com/api/?`;
    const KEY = 'key=29356502-06c25e59daf34f43ec469ca7f';
    const URL = `${BASE_URL}${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.pageNumber}&per_page=40&category=${this.category}`;

    const response = await axios.get(URL);
    return response.data;
  }

  get query() {
    return this.query;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  //  get category() {
  //   return this.query;
  // }

  // set category(newCategory) {
  //   this.category = newCategory;
  // }

 

  incrementpage() {
    this.pageNumber += 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }
}

export const pixabayApi = new Pixabay();