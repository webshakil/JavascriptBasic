// Initialize variables
let intervalId;
console.log("intervalId1===>",intervalId)
let count = 0;

// Function to be executed at each interval
function printCount() {
  count++;
  console.log("Count===>:", count);

//   // Stop the interval after reaching a certain count
//   if (count === 15) {
//     clearInterval(intervalId);
//     console.log("Interval stopped.");
//   }
 }

// Start the interval
intervalId = setInterval(printCount, 1000);
console.log("intervalId2===>",intervalId)