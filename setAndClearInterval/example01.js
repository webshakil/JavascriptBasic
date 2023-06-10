const delay = 2;
const limit = 10;
let i = 1;

console.log('START!');
const limitedInterval = setInterval(() => {
  console.log(`message ${i}, appeared after ${delay * i++} seconds`);
  
  if (i > limit) {
    clearInterval(limitedInterval);
    console.log('interval cleared!');
  }
}, delay * 1000);