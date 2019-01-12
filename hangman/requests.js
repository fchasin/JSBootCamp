const getPuzzle = function(callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(null, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback('error has tken place');
      console.log('an error has taken place');
    }
  });

  request.open('GET', 'http://puzzle.mead.io/puzzle');
  request.send();
};

const countryRequest = (countryCode, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find(element => {
        return element.alpha2Code === countryCode;
      });
      callback(null, country);
    } else if (e.target.readyState === 4) {
      callback('yup, theres an error');
    }
  });

  request.open('GET', 'https://restcountries.eu/rest/v2/all');
  request.send();
};

// synchronous request
const getPuzzleSync = () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://puzzle.mead.io/puzzle');
  request.send();

  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    return data.puzzle;
  } else if (e.target.readyState === 4) {
    throw new Error('things didnt go well!');
  }
};
