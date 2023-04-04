const output = document.getElementById("output");

      // Create an array of five promises
      const promises = Array.from({ length: 5 }, (_, i) => {
        return new Promise((resolve, reject) => {
          // Randomly decide whether to resolve or reject the promise
          const shouldResolve = Math.random() < 0.5;
          if (shouldResolve) {
            // Resolve the promise with a random number between 1 and 10
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            resolve(randomNumber);
          } else {
            // Reject the promise with an error message
            reject(`Promise ${i + 1} rejected with error`);
          }
        });
      });

      // Use Promise.all to wait for all promises to settle, and then log the array of results or errors
      Promise.allSettled(promises).then((results) => {
        results.forEach((result) => {
          // Check whether the promise resolved or rejected, and log the appropriate message
          if (result.status === "fulfilled") {
            const value = result.value;
            output.innerHTML += `<p>${value}</p>`;
          } else {
            const reason = result.reason;
            output.innerHTML += `<p>${reason}</p>`;
          }
        });
      });
