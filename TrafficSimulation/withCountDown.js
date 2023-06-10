const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Set initial state
let state = 'red';

// Set time intervals in milliseconds
const greenTime =5000;     // 5 minutes
const yellowTime = 5000;   // 10 minutes
const redTime = 5000;      // 14 minutes

const startTrafficLight = async () => {
  while (true) {
    // Change state and display color
    if (state === 'red') {
      console.log('RED');
      await countdown(redTime);
      state = 'green';
    } else if (state === 'green') {
      console.log('GREEN');
      await countdown(greenTime);
      state = 'yellow';
    } else if (state === 'yellow') {
      console.log('YELLOW');
      await countdown(yellowTime);
      state = 'red';
    }
  }
};

const countdown = async (time) => {
  let remainingTime = time;

  while (remainingTime > 0) {
    console.log(`Time remaining: ${formatTime(remainingTime)}`);
    await sleep(1000);
    remainingTime -= 1000;
  }
};

const formatTime = (time) => {
  const minutes = Math.floor(time / (60 * 1000));
  const seconds = Math.floor((time % (60 * 1000)) / 1000);

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

startTrafficLight();
