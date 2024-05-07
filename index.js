const elements = document.querySelectorAll(".element");
var startBtn = document.querySelector("#startBtn");

let nums = [3, 1, 4, 10, 5, 6, 7];

startBtn.addEventListener("click", function() {
    mergeSort(nums, 0, nums.length-1);
    console.log(nums);
});

function mergeSort(arr, l, r) {
    if (l === r) {
        return arr;
    }

    m = Math.floor((l+r)/2);

    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
    return arr;
};

function merge(arr, L, M, R) {
    left = arr.slice(L, M+1);
    right = arr.slice(M+1, R+1);

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