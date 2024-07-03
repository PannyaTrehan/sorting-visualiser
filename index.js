import { sleep, changeBarHeights, changeBarColours, finalVisualise, shuffleArray } from './helper/index.js';
import { mergeSort, quickSort, insertionSort, gnomeSort } from './algorithms/index.js';

export const elements = document.querySelectorAll(".element") || [];
const arraySize = document.querySelector("#numElements") || { value: 0 };
const comparasions = document.querySelector("#comparasions") || { value: 0 };
const delay = document.querySelector("#delay") || { value: 0 };
var startBtn = document.querySelector("#startBtn") || { addEventListener: () => { } };
var randomiseBtn = document.querySelector("#randomiseBtn") || { addEventListener: () => { } };

var currentPage = null;

const savedDelayTime = localStorage.getItem('delayTime');
export const delayInSeconds = savedDelayTime !== null ? parseFloat(savedDelayTime) : 0.05;

const size = localStorage.getItem('size');
export let numElements = size !== null ? parseFloat(size) : 100;

export const color = "white";
export let nums = [];
let numComparasions = 0;
arraySize.textContent = `Size: ${numElements}`;

for (let i = 0; i < numElements; i++) {
  nums.push(i + 1);
}

nums = shuffleArray(nums);
delay.textContent = `Delay: ${delayInSeconds} seconds`;
changeBarColours();
changeBarHeights();

startBtn.addEventListener("click", async function () {
  numComparasions = 0;

  if (currentPage.includes('merge-sort.html')) {
    await mergeSort(nums, 0, nums.length - 1);
  } else if (currentPage.includes('quick-sort.html')) {
    await quickSort(nums, 0, nums.length - 1);
  } else if (currentPage.includes('insertion-sort.html')) {
    await insertionSort(nums, nums.length)
  } else if (currentPage.includes('gnome-sort.html')) {
    await gnomeSort(nums);
  } else {
    console.log("not a valid algorithm page");
    return;
  }

  await changeBarColours();
  await finalVisualise(numElements, delayInSeconds);
  await sleep(delay);
  await changeBarColours(color);
});

randomiseBtn.addEventListener("click", function () {
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
  currentPage = window.location.pathname;
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

  const element = document.getElementById('numElements');

  if (element) {
    element.textContent = `Elements: ${numElements}`;
  }

  openBtn.addEventListener('click', toggleSidebar);
  document.addEventListener('click', handleClickOutside);
});