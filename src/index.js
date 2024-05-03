import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const loader = document.querySelector('.loader');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  // error message
}

function updateCatInfo(catData) {
  const { name, description: desc, temperament: temp, url } = catData[0];
  breedName.textContent = name;
  description.textContent = desc;
  temperament.textContent = temp;
  catInfo.querySelector('img').src = url;
}

async function handleBreedSelection() {
  const selectedBreedId = breedSelect.value;
  showLoader();
  try {
    const catData = await fetchCatByBreed(selectedBreedId);
    updateCatInfo(catData);
    hideLoader();
    catInfo.style.display = 'block';
  } catch (error) {
    showError();
    hideLoader();
  }
}

breedSelect.addEventListener('change', handleBreedSelection);

async function initializeApp() {
  showLoader();
  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    hideLoader();
    breedSelect.style.display = 'block';
  } catch (error) {
    showError();
    hideLoader();
  }
}

initializeApp();
