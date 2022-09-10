// Business Logic

function robotCountsTo(input) {
  const inputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes(3)) {
      inputArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      inputArray.push("Boop!");
    } else if (i.toString().includes(1)) {
      inputArray.push("Beep!");
    }else {
      inputArray.push(i);
    }
  }
  return inputArray;
}