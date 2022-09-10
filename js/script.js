// Business Logic

function countUpTo(input) {
  const inputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes(1)) {
      inputArray.push("Beep");
    }else {
      inputArray.push(i);
    }
  }
  return inputArray;
}