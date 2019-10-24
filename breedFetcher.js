const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error,response, body) =>{
    if (error) {
      return callback(('!!!\nOops, something is wrong with the URL or the API is down. See details below: \n' + error), null);
    } else {
      let data = JSON.parse(body);
      if (data[0] === undefined) { //if the data array of objects is not there
        return callback('!!!\nOoops we don\'t have any cats with that breed\n', null);
      } else {
        // let infoRequest = data[0]["description"];
        return callback(null, data[0]["description"]);
      }
    }
  });
};

module.exports = fetchBreedDescription;