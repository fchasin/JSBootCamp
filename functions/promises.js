// callback

const getDataCallback = callback => {
  setTimeout(() => {
    callback(undefined, 'this is the data');
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
  } else {
    console.log(data);
  }
});

// promise
const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('this is the promise data');
      reject('this is my promise error');
    }, 2000);
  });
};

// first argument fires only when promises resolve
myPromise.then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);
