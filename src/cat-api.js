import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_p2yZAjFmXBiLqLvtl9RiqFl9SoUsCgVXZ8JE8IeWIylX4zIeEub9GSAfk7UKcZk2';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
