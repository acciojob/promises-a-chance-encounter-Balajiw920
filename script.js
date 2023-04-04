//your JS code here. If required.
const output = document.getElementById("output");

const promises = [];
for (let i = 1; i <= 5; i++) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        reject(`Promise ${i} rejected with error`);
      } else {
        resolve(`Promise ${i} resolved with ${Math.floor(Math.random() * 10) + 1}`);
      }
    }, 1000); // wait 1 second
  });
  promises.push(promise);
}

Promise.all(promises)
  .then((results) => {
    results.forEach((result) => {
      const p = document.createElement("p");
      p.innerText = result;
      output.appendChild(p);
    });
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.innerText = error;
    output.appendChild(p);
  });
