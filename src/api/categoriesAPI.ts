import axios from 'axios'

const instance = axios.create({
  baseURL: "https://test2.sionic.ru/api",
});


export const categoriesAPI = {
  getCategories() {
      return instance.get('/Categories')
  },
}

