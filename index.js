const elements = document.querySelectorAll(".element");
var startBtn = document.querySelector("#startBtn");

let nums = [];

for (let i = 0; i < 50; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    nums.push(randomNumber);
}

startBtn.addEventListener("click", function() {
    mergeSort(nums, 0, nums.length - 1);
    console.log(nums);
    changeBarHeights();
});

changeBarHeights();

function mergeSort(arr, l, r) {
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
    return arr;
}

function merge(arr, L, M, R) {
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
}

//gets called once at the beginning
function changeBarHeights() {
    elements.forEach(element => {
        //change the number '10' to something else, based on your range of values
        percentage = (nums[parseInt(element.id)]/100)*100;
        element.style.height = `${percentage}%`;
    })
}