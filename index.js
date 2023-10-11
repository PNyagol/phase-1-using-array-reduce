
// the commented code below is what I submitted
// It is the arrow function version of the code bellow it

// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(totalBatteries);


// another way of writing it
// I ask the TM to adopt any of them

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(totalBatteries);

