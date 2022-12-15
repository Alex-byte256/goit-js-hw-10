import './css/styles.css';
import fetchCountries from './fetchCountries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
};

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  if (refs.inputEl.value.trim() === '') {
    return;
  }
  const country = refs.inputEl.value;
  fetchCountries(country);
}
