import axios from 'axios';

import { ICategory } from 'models/ICategory';

const instance = axios.create({
  baseURL: 'https://test2.sionic.ru/api',
});

export const categoriesAPI = {
  getCategories() {
    return instance.get<ICategory[]>('/Categories');
  },
};
