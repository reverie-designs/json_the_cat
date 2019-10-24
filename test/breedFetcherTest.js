const fetchBreedDescription = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ';

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('returns a an error msg via call back', (done) => {
    fetchBreedDescription('grr', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(null, err);

      const expectedDesc = '!!!\nOoops we don\'t have any cats with that breed\n';
      
      // compare returned description
      assert.equal(expectedDesc, err);
      done();
    });
  });
  
});