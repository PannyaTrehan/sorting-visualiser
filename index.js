const elements = document.querySelectorAll(".element");
const comparasions = document.querySelector("#comparasions");
const delay = document.querySelector("#delay");
var startBtn = document.querySelector("#startBtn");

let nums = [];
let _numComparasions = 0;
var delayInSeconds = 0.05;
let numElements = 100;

for (let i = 0; i < numElements; i++) {
    // let randomNumber = Math.floor(Math.random() * 100) + 1;
    nums.push(i+1);
}

nums = shuffleArray(nums);
numComparasions = 0;
delay.textContent = `Delay: ${delayInSeconds} seconds`;
changeBarColours();
changeBarHeights();

startBtn.addEventListener("click", async function() {
    numComparasions = 0;
    await mergeSort(nums, 0, nums.length - 1);
    await finalVisualise();
    await sleep(0.1);
    await changeBarColours();
});

Object.defineProperty(window, 'numComparasions', {
    get() {
        return _numComparasions;
    },
    set(value) {
        _numComparasions = value;
        comparasions.textContent = `Comparisons: ${value}`;
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function mergeSort(arr, l, r) {
    changeBarColours();
    
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        await mergeSort(arr, l, m);
        await mergeSort(arr, m + 1, r);
        await merge(arr, l, m, r);
    }

    return arr;
}

async function merge(arr, L, M, R) {
    selectBarGreen(L);
    selectBarGreen(R);
    var left = arr.slice(L, M + 1);
    var right = arr.slice(M + 1, R + 1);

    var temp = []; //temp store

    var i = 0;
    var j = 0;

    //goal -- keep track of index
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            selectBarRed(L + i);
            temp.push(left[i]);
            i++;
        } else {
            selectBarRed(M+1 + j);
            temp.push(right[j]);
            j++;
        }
        numComparasions++;
        await sleep(delayInSeconds);
        changeBarColours();
        selectBarGreen(L);
        selectBarGreen(R);
    }

    while (i < left.length) {
        selectBarRed(L + i);
        temp.push(left[i]);
        i++;
        await sleep(delayInSeconds);
        changeBarColours();
        selectBarGreen(L);
        selectBarGreen(R);
    }

    while (j < right.length) {
        selectBarRed(M + 1 + j);
        temp.push(right[j]);
        j++;
        await sleep(delayInSeconds);
        changeBarColours();
        selectBarGreen(L);
        selectBarGreen(R);
    }

    changeBarColours();
    selectBarGreen(L);
    selectBarGreen(R);

    for (let k = 0; k < temp.length; k++) {
        selectBarGreen(L);
        selectBarGreen(R);
        selectBarRed(L+k);
        arr[L + k] = temp[k];
        changeBarHeights();
        await sleep(delayInSeconds);
        changeBarColours();
    }

    changeBarColours();
}

async function finalVisualise() {
    for (let i = 0; i < numElements; i++) {
        selectBarGreen(i);
        await sleep(delayInSeconds/3);
    }
}

function changeBarHeights() {
    elements.forEach(element => {
        percentage = (nums[parseInt(element.id)]/100)*100;
        element.style.height = `${percentage}%`;
    })
}

function changeBarColours() {
    elements.forEach(element => {
        element.style.backgroundColor = "white";
    })
}

function selectBarRed(index) {
    elements[index].style.backgroundColor = "red";
}


function selectBarGreen(index) {
    elements[index].style.backgroundColor = "#42f554";
}

async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
  