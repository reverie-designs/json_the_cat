const argv = process.argv.slice(2);
const fetchBreedDescription = require('./breedFetcher.js');
let breedName = argv[0].slice(0,3);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});