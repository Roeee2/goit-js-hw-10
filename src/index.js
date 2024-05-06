import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loaderInfo = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const errorInfo = document.querySelector('.error');

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
      catInfo.innerHTML = `
    <div class="cat-info-container">
        <img src="${cat.url}" alt="Cat Image" class="cat-pic" />
        <div class="cat-details">
            <span class="p-title">Race:</span>
            <p>${cat.breeds[0].name}</p>
            <span class="p-title">Description:</span>
            <p>${cat.breeds[0].description}</p>
            <span class="p-title">Temperament:</span>
            <p>${cat.breeds[0].temperament}</p>
        </div>
    </div>
`;
      catInfo.style.display = 'block';
      loaderInfo.style.display = 'none';
    })
    .catch(err => {
      loaderInfo.style.display = 'none';
      errorInfo.style.display = 'block';
      Notiflix.Notify.failure('Error fetching cat by breed:', err);
    });
});
