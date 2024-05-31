import { sleep } from "./helper/sleep.js";
import { changeBarHeights } from "./helper/changeBarHeights.js";
import { changeBarColours } from "./helper/changeBarColours.js";
import { finalVisualise } from "./helper/endAnimation.js";
import { shuffleArray } from "./helper/shuffleArray.js";
import { mergeSort } from "./algorithms/mergeSort.js";
import { quickSort } from "./algorithms/quickSort.js";

export const elements = document.querySelectorAll(".element");
const arraySize = document.querySelector("#numElements");
const comparasions = document.querySelector("#comparasions");
const delay = document.querySelector("#delay");
var startBtn = document.querySelector("#startBtn");
var randomiseBtn = document.querySelector("#randomiseBtn");

export const color = "white";
export let nums = [];
let numComparasions = 0;
export const delayInSeconds = .05;
export let numElements = 100;
arraySize.textContent = `Size: ${numElements}`;

for (let i = 0; i < numElements; i++) {
    nums.push(i+1);
}

nums = shuffleArray(nums);
delay.textContent = `Delay: ${delayInSeconds} seconds`;
changeBarColours();
changeBarHeights();

startBtn.addEventListener("click", async function() {
    numComparasions = 0;
    // await mergeSort(nums, 0, nums.length - 1);
    await quickSort(nums, 0, nums.length-1);
    await changeBarColours();
    await finalVisualise(numElements, delayInSeconds);
    await sleep(delay);
    await changeBarColours(color);
});

randomiseBtn.addEventListener("click", function() {
    location.reload();
    return false;
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

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('mySidebar');
    const openBtn = document.querySelector('.openbtn');
  
    function toggleSidebar() {
      if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '20%';
      } else {
        sidebar.style.width = '0';
      }
    }
  
    function handleClickOutside(event) {
      if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
        sidebar.style.width = '0';
      }
    }

    openBtn.addEventListener('click', toggleSidebar);
    document.addEventListener('click', handleClickOutside);
  });
  