let counter = 0;

export function setupEventListeners() {
  const button = document.getElementById("increment-btn");
  if (button) {
    button.addEventListener("click", () => {
      counter++;
      document.getElementById("counter").innerText = counter;
    });
  }
}

setupEventListeners();

export function incrementCounter() {
  counter++;
  return counter;
}

export function getCounter() {
  return counter;
}

export function resetCounter() {
  counter = 0;
  const counterElement = document.getElementById("counter");
  if (counterElement) {
    counterElement.innerText = counter;
  }
}
