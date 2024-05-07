const elements = document.querySelectorAll(".element");
var startBtn = document.querySelector("#startBtn");

let nums = [3, 1, 4, 10, 5, 6, 7];

changeBarHeights();

startBtn.addEventListener("click", function() {
    changeBarHeights();
    mergeSort(nums, 0, nums.length-1);
    changeBarHeights();
    console.log(nums);
    console.log("complete")
});

function mergeSort(arr, l, r) {
    console.log(l + "-" + r)
    if (l === r) {
        return arr;
    }

    m = Math.floor((l+r)/2);

    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
    return arr;
};

async function merge(arr, L, M, R) {
    left = arr.slice(L, M+1);
    right = arr.slice(M+1, R+1);


    changeBarColorSelect(L);
    await sleep(9000); // Sleep for 1 second
    changeBarColorUnselect(L);


    i = L;
    j = 0;
    k = 0;

    while (j < left.length && k < right.length) {
        if (left[j] <= right[k]) {
            arr[i] = left[j];
            j++;

        } else{
            arr[i] = right[k];
            k++;
        }
        i++;
    }

    while(j < left.length) {
        nums[i] = left[j];
        i++;
        j++;
    }

    while(k < right.length) {
        nums[i] = right[k];
        i++;
        k++;
    }
};

//gets called once at the beginning
function changeBarHeights() {
    elements.forEach(element => {
        //change the number '10' to something else, based on your range of values
        percentage = (nums[parseInt(element.id)]/10)*100;
        element.style.height = `${percentage}%`;
    })
}

//example of how to call "changeBarColor(elements[0])"";
function changeBarColorSelect(index) {
    elements[index].style.backgroundColor = "red";
}

function changeBarColorUnselect(index) {
    elements[index].style.backgroundColor = "blue";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }