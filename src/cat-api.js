import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_p2yZAjFmXBiLqLvtl9RiqFl9SoUsCgVXZ8JE8IeWIylX4zIeEub9GSAfk7UKcZk2clear';

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
