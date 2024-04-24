// Perform calculations asynchronously and return a Promise
function calculate() {
  return new Promise((resolve, reject) => {
    // Perform calculations
    // Once calculations are complete, resolve the Promise
    setTimeout(() => {
      resolve();
    }, 3000); // Simulating a 3-second delay
  });
}

const someVariable = "Hello";
//console.log(someVariable);

module.exports = {
  calculate,
  someVariable,
};
