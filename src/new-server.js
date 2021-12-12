import axios from 'axios';

export default class NewApiService {
  constructor() {
    this.input = '';
    this.page = 1;
  }

  async fetchArticles() {
    const axiosOptions = {
      method: 'get',
      url: 'https://pixabay.com/api/',
      params: {
        key: '24754911-c9c5768c1694b4421d7644037',
        q: `${this.query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: 40,
      },
    };
    try {
      const response = await axios(axiosOptions);

      const data = response.data;

      this.page += 1;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.input;
  }

  set query(newQuery) {
    this.input = newQuery;
  }
}
