import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from '../node_modules/slim-select';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loaderInfo = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorInfo = document.querySelector('.error');

// new SlimSelect({
//   select: 'select.breed-select',
// });

fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    breedSelect.style.display = 'block';
    loaderInfo.style.display = 'none';
  })
  .catch(err => {
    loaderInfo.style.display = 'none';
    errorInfo.style.display = 'block';
    Notiflix.Notify.failure('Error fetching breeds:', err);
  });

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  loaderInfo.style.display = 'block';
  catInfo.style.display = 'none';
  fetchCatByBreed(selectedBreedId)
    .then(catData => {
      const cat = catData[0];
      catInfo.innerHTML = `<img src="${cat.url}" alt="Cat Image" style="width:auto;height:350px" />
    <p><strong>Race:</strong> ${cat.breeds[0].name}</p>
    <p><strong>Description:</strong> ${cat.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>`;
      catInfo.style.display = 'block';
      loaderInfo.style.display = 'none';
    })
    .catch(err => {
      loaderInfo.style.display = 'none';
      errorInfo.style.display = 'block';
      Notiflix.Notify.failure('Error fetching cat by breed:', err);
    });
});
