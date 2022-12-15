export default function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,captail`)
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log('запит звершено'));
}
