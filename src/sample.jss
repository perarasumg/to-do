function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 2000); // Simulating a 2-second delay
}

function processData(data, callback) {
  setTimeout(() => {
    callback(data.toUpperCase());
  }, 1000);
}

fetchData((data) => {
  console.log("Step 1: ", data);
  processData(data, (processedData) => {
    console.log("Step 2: ", processedData);
  });
});
