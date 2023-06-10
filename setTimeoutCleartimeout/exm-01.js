let timeoutId;

function startFunctionWithDelay(delay) {
  timeoutId = setTimeout(() => {
    console.log(`Function executed after ${delay} milliseconds`);
  }, delay);
}

function cancelFunctionExecution() {
  clearTimeout(timeoutId);
  console.log('Function execution cancelled');
}

// Start the function with a delay of 5 seconds
startFunctionWithDelay(5000);

// Cancel the function execution after 2 seconds
setTimeout(cancelFunctionExecution, 2000);
