//callbacks
const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightAngle = (a, b, c) => {
  let isIt = square(a) + square(b) === square(c);
  return isIt;
};
//console.log(isRightAngle(3, 4, 5));

//WebAPIs and Single  Threaded
const singleThread = () => {
  console.log("This runs first");
  setTimeout(() => {
    console.log("This runs third");
  }, 2000);
  console.log("This runs second");
};
//singleThread();

//callBack hell
const changeBack = () => {
  setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
      setTimeout(() => {
        document.body.style.backgroundColor = "blue";
      }, 1000);
    }, 1000);
  }, 1000);
};
//changeBack();

//Promises: Fake request with callbacks
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your data from ${url}`);
//     }
//   }, delay);
// };

// fakeRequestCallback(
//   "books.com",
//   function (response) {
//     console.log("It Worked!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com",
//       function (response) {
//         console.log("It Worked Again!");
//         console.log(response);
//       },
//       function (err) {
//         console.log("Error(2nd Request)h!!!");
//         console.log(err);
//       }
//     );
//   },
//   function (err) {
//     console.log("Error!!!");
//     console.log(err);
//   }
// );

//Demo: fakeRequest promise
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("sample.com")
//   .then(() => {
//     console.log("It worked!");
//     fakeRequestPromise("sample.com")
//       .then(() => {
//         console.log("It worked!");
//         fakeRequestPromise("sample.com")
//           .then(() => {
//             console.log("It worked!");
//           })
//           .catch(() => {
//             console.log("Oh no, Error!");
//           });
//       })
//       .catch(() => {
//         console.log("Oh no, Error!");
//       });
//   })
//   .catch(() => {
//     console.log("Oh no, Error!");
//   });

//The magic of Promise
// fakeRequestPromise("sample.com/1")
//   .then((data) => {
//     console.log("It worked!");
//     console.log(data);
//     return fakeRequestPromise("sample.com/2");
//   })
//   .then((data) => {
//     console.log("It worked(2)!");
//     console.log(data);
//     return fakeRequestPromise("sample.com/3");
//   })
//   .then((data) => {
//     console.log("It worked(3)!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!", err);
//   });

//console.log(fakeRequestPromise(6));

//creating promises
// const pro = new Promise((resolve, reject) => {

//     rejected();
// });
// console.log(pro);

//making promises
const samp = () => {
  return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 20) + 1;
    setTimeout(() => {
      if (rand > 10) {
        reject("Number limit is exceeded!! :(");
      } else {
        resolve("Number within range!");
      }
    }, 2000);
  });
};

//using the promise
// samp()
//   .then((data) => {
//     console.log("Promise resolved");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Promise rejected");
//     console.log(err);
//   });

//async function
// const hello = async () => {
//   // throw new Error("urgh");
//   return "Hello World";
// };
// hello()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Credentials";
//   if (password === "correct") return "Correct password, Welcome!";
//   throw "Invalid Password";
// };
// login("Okon", "correct")
//   .then((data) => {
//     console.log("Logged In");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Err");
//     console.log(err);
//   });
