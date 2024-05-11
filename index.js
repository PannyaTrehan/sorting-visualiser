import { sleep } from "./helper/sleep.js";
import { changeBarHeights } from "./helper/changeBarHeights.js";
import { changeBarColours } from "./helper/changeBarColours.js";
import { finalVisualise } from "./helper/endAnimation.js";
import { shuffleArray } from "./helper/shuffleArray.js";
import { mergeSort } from "./algorithms/mergeSort.js";

export const elements = document.querySelectorAll(".element");
const arraySize = document.querySelector("#numElements");
const comparasions = document.querySelector("#comparasions");
const delay = document.querySelector("#delay");
var startBtn = document.querySelector("#startBtn");

export const color = "white";
export let nums = [];
let numComparasions = 0;
export const delayInSeconds = 0.03;
let numElements = 100;
arraySize.textContent = `Size: ${numElements}`;

for (let i = 0; i < numElements; i++) {
    nums.push(i+1);
}

nums = shuffleArray(nums);
delay.textContent = `Delay: ${delayInSeconds} seconds`;
changeBarColours(color);
changeBarHeights(nums);

startBtn.addEventListener("click", async function() {
    numComparasions = 0;
    await mergeSort(nums, 0, nums.length - 1);
    await finalVisualise(numElements, delayInSeconds);
    await sleep(0.1);
    await changeBarColours(color);
});

Object.defineProperty(window, 'numComparasions', {
    get() {
        return numComparasions;
    },
    set(value) {
        numComparasions = value;
        comparasions.textContent = `Comparisons: ${value}`;
    }
});