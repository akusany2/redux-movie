import 'es6-promise';
import 'isomorphic-fetch';

function getDiscovery() {
  return new Promise ( resolve => {
    fetch(`http://localhost:3003/movies`)
      .then( response => {
        if( response.status >= 400 ){
          throw new Error('Bad response from server');
        }
        resolve( response.json() )
      })
  })
}
function getById(id) {
  return new Promise ( resolve => {
    fetch(`http://localhost:3003/movies/${id}`)
      .then( response => {
        if( response.status >= 400 ){
          throw new Error('Bad response from server');
        }
        resolve( response.json() )
      })
  })
}

function getImage(imageName, size){
  return `https://image.tmdb.org/t/p/${size}/${imageName}`;
}

export default {
  getDiscovery,
  getById,
  getImage,
};
