const output = document.getElementById("output");

// Create an array of five promises, each with a 50% chance of resolving to a random number between 1 and 10, or rejecting with an error
const promises = Array.from({ length: 5 }, () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber % 2 === 0) {
    return Promise.resolve(randomNumber);
  } else {
    return Promise.reject(`Promise ${randomNumber} rejected with error`);
  }
});

// Wait for all promises to settle and then log the results or errors to the output div
Promise.allSettled(promises)
  .then((results) => {
    results.forEach((result, index) => {
      const p = document.createElement("p");
      if (result.status === "rejected") {
        p.textContent = result.reason;
      } else {
        p.textContent = `Promise ${index + 1} resolved with ${result.value}`;
      }
      output.appendChild(p);
    });
  })
  .catch((error) => {
    console.error(error);
  });
