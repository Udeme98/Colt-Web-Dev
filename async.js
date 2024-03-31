//promises
const hello = () => {
  return new Promise((resolve, reject) => {
    let submit = true;
    if (submit) {
      resolve("You've Submitted");
    } else {
      reject("You've not submitted");
    }
  });
};

const scores = (score) => {
  return new Promise((resolve, reject) => {
    if (score > 44) {
      resolve("You pass");
    } else {
      reject("You did not pass :(");
    }
  });
};

// hello()
//   .then((res) => {
//     console.log(res);
//     console.log("Processing your Result...");
//     return scores(50).then((msg) => {
//       console.log("Your Result is ready");
//       console.log(msg);
//     });
//   })
//   .catch((err) => {
//     console.log("Your Result is ready");
//     console.log(err);
//   });

//async WebDevS
// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making Request to ${location}`);
//     if (location === "Google") {
//       resolve("Google says hi");
//     } else {
//       reject("We can only talk to Google");
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing Request");
//     resolve(`Extra Information + ${response}`);
//   });
// }

// const calling = async () => {
//   try {
//     const response = await makeRequest("Google");
//     console.log("Response Received");
//     const data = await processRequest(response);
//     console.log(data);
//   } catch (e) {
//     console.log("Error :(", e);
//   }
// };
// calling();

//JSON - JavaScript Object Notation
// let boy = {
//   name: "John",
//   favColor: "Blue",
//   car: "Toyota",
// };
// let jBoy = JSON.stringify(boy);
// console.log(jBoy);

// let boyy = JSON.parse(jBoy);
// console.log(boyy.favColor);

//Fetch API
fetch("sample.json")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res2) => {
    console.log(res2);
  })
  .catch((err) => {
    console.log("Err", e);
  });
