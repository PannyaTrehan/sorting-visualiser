const elements = document.querySelectorAll(".element");
var startBtn = document.querySelector("#startBtn");

let nums = [];
var delayInMilliseconds = 1000; //1 second

for (let i = 0; i < 50; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    nums.push(randomNumber);
}

startBtn.addEventListener("click", function() {
    console.log(nums);
    mergeSort(nums, 0, nums.length - 1);
    changeBarHeights();
    changeBarColours();
});

changeBarColours();
changeBarHeights();

//goals:
    //first try to slow the algorithm down as much as possible as you cannot visualise it without that
        //keep  a variable to keep track of how slow you are making it (e.g. s = 1000;)
    //get the left and right pointers showing
    //get the index pointre showing
    //have a seperate function for when the actual merging is happening (when merging from left to right)

function mergeSort(arr, l, r) {
    changeBarColours();
    sleep(1000);
    selectBarRed(l);
    selectBarRed(r);
    console.log("pointers - " + l + " " + r + " " + (l < r));
    
    //active the red colour for the left and right index
    //this will not change until the next left and right indexes are chosen
    //perhaps just keep track of the left and right indexes always as there will always be two that are selected

    if (l >= r) {
        //active the colour green on the left (which is the same as the right) index
        //when this index changes is when you will remove its colour. Nothing based on time.
        console.log("green - " + l + " " + r);
    }
    
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }

    return arr;
}

function merge(arr, L, M, R) {
    console.log("merge - " + L + "-" + M + "-" + R);
    var left = arr.slice(L, M + 1);
    var right = arr.slice(M + 1, R + 1);

    var i = L;
    var j = 0;
    var k = 0;

    while (j < left.length && k < right.length) {
        if (left[j] <= right[k]) {
            arr[i] = left[j];
            j++;
        } else {
            arr[i] = right[k];
            k++;
        }
        i++;
    }

    while (j < left.length) {
        arr[i] = left[j];
        j++;
        i++;
    }

    while (k < right.length) {
        arr[i] = right[k];
        k++;
        i++;
    }
    changeBarHeights();
}

//gets called once at the beginning
function changeBarHeights() {
    elements.forEach(element => {
        //change the number '10' to something else, based on your range of values
        percentage = (nums[parseInt(element.id)]/100)*100;
        element.style.height = `${percentage}%`;
    })
}

function changeBarColours() {
    elements.forEach(element => {
        element.style.backgroundColor = "blue";
    })
}

//to select a bar as red
function selectBarRed(index) {
    setTimeout(() => { // Introduce a delay before changing the color
        console.log("selected - " + index);
        elements[index].style.backgroundColor = "red";
    }, delayInMilliseconds);
}


//to select a bar as green
function selectBarGreen(index) {
    elements[index].style.backgroundColor = "green";
}

//blue is the default colour
function unselectBar(index) {
    elements[index].style.backgroundColor = "blue";
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  