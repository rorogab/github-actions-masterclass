import { describe, it, expect, beforeEach } from "vitest";
import { incrementCounter, getCounter, resetCounter, setupEventListeners } from "../src/script";

describe("Counter Tests", () => {
  beforeEach(() => {
    // Reset the counter before each test
    document.body.innerHTML = `
      <div class="counter-container">
        <h1 id="counter">0</h1>
        <button id="increment-btn">Click me!</button>
      </div>
    `;
    // Re-setup event listeners after resetting the DOM
    setupEventListeners();
    // Reset the counter value
    resetCounter();
  });

  it("should initialize the counter to zero", () => {
    const counterValue = getCounter();
    expect(counterValue).toBe(0);
  });

  it("incrementCounter should increment the counter", () => {
    const initialCounter = getCounter();
    incrementCounter();
    const newCounter = getCounter();
    expect(newCounter).toBe(initialCounter + 1);
  });

  it("getCounter should return the current counter value", () => {
    const counterValue = getCounter();
    expect(counterValue).toBeGreaterThanOrEqual(0);
  });

  it("should increment the counter when the button is clicked", () => {
    const button = document.getElementById("increment-btn");
    button.click();
    const counterValue = getCounter();
    expect(counterValue).toBe(1);
  });

  it("should increment the counter multiple times correctly", () => {
    incrementCounter();
    incrementCounter();
    incrementCounter();
    const counterValue = getCounter();
    expect(counterValue).toBe(3);
  });

  it("should update the DOM correctly when the button is clicked", () => {
    const button = document.getElementById("increment-btn");
    button.click();
    const counterElement = document.getElementById("counter");
    console.log(counterElement);

    expect(counterElement.innerText).toBe(1);
  });
});
