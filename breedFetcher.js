const request = require('request');
const argv = process.argv.slice(2);
let breed = argv[0].slice(0,3);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(url + breed, (error, response, body) =>{
  if (error) {
    console.log('Oops the requested API is having issues please come back later');
  } else {
    let data = JSON.parse(body);
    if (data[0] === undefined) { //if the data array of objects is not there
      console.log("Sorry we couldn't find that breed");
    } else {
      let infoRequest = data[0]["description"];
      console.log(infoRequest);
    }
  }
});