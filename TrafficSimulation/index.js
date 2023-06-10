const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Set initial state
let state = 'red';

// Set time intervals in milliseconds
const greenTime = 1 * 60 * 1000;     // 5 minutes
const yellowTime = 5 * 60 * 1000;   // 10 minutes
const redTime = 7 * 60 * 1000;      // 14 minutes

const startTrafficLight = async () => {
  while (true) {
    // Change state and display color
    if (state === 'red') {
      console.log('RED');
      await sleep(redTime);
      state = 'green';
    } else if (state === 'green') {
      console.log('GREEN');
      await sleep(greenTime);
      state = 'yellow';
    } else if (state === 'yellow') {
      console.log('YELLOW');
      await sleep(yellowTime);
      state = 'red';
    }
  }
};

startTrafficLight();

