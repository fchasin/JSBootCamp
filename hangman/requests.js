const getPuzzle = async wordCount => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw Error('unable to fetch puzzle');
  }
};

const countryRequest = async countryCode => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  if (response.status === 200) {
    const countries = await response.json();
    return countries.find(country => country.alpha2Code === countryCode);
  } else throw Error('unable to parse country data');
};

const getLocation = async () => {
  const response = await fetch(`http://ipinfo.io/json?token=3a5d2178a650c2`);
  if (response.status === 200) {
    return response.json();
  } else throw Error('error in response fetching');
};

const getCurrentCountry = async () => {
  const response = await getLocation();
  return countryRequest(response.country);
};

// const countryRequest = countryCode =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', e => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(element => {
//           return element.alpha2Code === countryCode;
//         });
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject('yup, theres an error');
//       }
//     });

//     request.open('GET', 'https://restcountries.eu/rest/v2/all');
//     request.send();
//   });

const getPuzzleOld = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error('unable to fetch puzzle');
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

const countryRequestOld = countryCode => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw Error('unable to fetch country data');
      }
    })
    .then(countries => {
      return countries.find(country => {
        return country.alpha2Code === countryCode;
      });
    })
    .then(country => {
      return country.name;
    });
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
