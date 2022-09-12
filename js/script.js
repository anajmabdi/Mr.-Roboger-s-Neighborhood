//Utility Logic 

function isEmpty(testString) {
  return (testString.trim().length ===0);
}

// Business Logic
function robotCountsUpTo(input) {
  if (isEmpty(input)) {
    return null;
  }
  const inputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes(3)) {
      inputArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      inputArray.push("Boop!");
    } else if (i.toString().includes(1)) {
      inputArray.push("Beep!");
    } else {
      inputArray.push(i);
    }
  }
  return inputArray;
}

function robotCountsDownTo(input) {
  if (isEmpty(input)) {
    return null;
  }
  if (input < 0) {
    const negativeArray = []
    for (let i = 0; i >= input; i--) {
      if (i.toString().includes(3)) {
        negativeArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes(2)) {
        negativeArray.push("Boop!");
      } else if (i.toString().includes(1)) {
        negativeArray.push("Beep!");
      } else {
        negativeArray.push(i);
      }
    }
    return negativeArray
  }
}

// UI Logic

function handleSubmission(event) {
  event.preventDefault();
  const userInput=document.getElementById("user-input").value;
  let positiveNumbers=robotCountsUpTo(userInput);
  let negativeNumbers=robotCountsDownTo(userInput);
  document.querySelector('span#output').innerText=positiveNumbers.join(" , ")
  document.querySelector('span#output').innerText=negativeNumbers.join(" , ")
  // document.querySelector("class#hidden").removeAttribute('class');
}

window.addEventListener("load", function() {
  const form=document.getElementById("input-number");
  form.addEventListener("submit", handleSubmission);
})