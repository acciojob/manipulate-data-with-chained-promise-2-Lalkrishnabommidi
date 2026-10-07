//your JS code here. If required.
const output = document.getElementById("output");

function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    .then((arr) => {
      return new Promise((resolve) => {
        const evenNumbers = arr.filter(num => num % 2 === 0);

        setTimeout(() => {
          output.textContent = evenNumbers;
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((arr) => {
      return new Promise((resolve) => {
        const result = arr.map(num => num * 2);

        setTimeout(() => {
          output.textContent = result;
          resolve(result);
        }, 2000);
      });
    });
}

manipulateData();