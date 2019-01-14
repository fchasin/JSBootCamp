// callback

const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number ') {
      callback(undefined, num * 2);
    } else {
      callback('number must be provided');
    }
  }, 2000);
};

// callback hell
getDataCallback(2, (err, data) => {
  if (err) {
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log('err');
      } else {
        console.log(data);
      }
    });
  }
});

// promise
const getDataPromise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number'
        ? resolve(num * 2)
        : reject('error number must be provdied');
    }, 2000);
  });

// getDataPromise(2).then(
//   data => {},
//   err => {
//     console.log('error');
//   }
// );

getDataPromise(10)
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    return 'this is some test data';
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
