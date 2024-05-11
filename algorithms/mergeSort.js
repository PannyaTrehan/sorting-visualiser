import { changeBarHeights } from "../helper/changeBarHeights.js";
import { selectBar } from "../helper/selectBar.js";
import { sleep } from "../helper/sleep.js";
import { changeBarColours } from "../helper/changeBarColours.js";
import { color } from "../index.js";
import { delayInSeconds } from "../index.js";
import { nums } from "../index.js";

export async function mergeSort(arr, l, r) {
    changeBarColours(color);
    
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        await mergeSort(arr, l, m);
        await mergeSort(arr, m + 1, r);
        await merge(arr, l, m, r);
    }

    return arr;
}

async function merge(arr, L, M, R) {
    console.log("here")
    selectBar(L, "#42f554");
    selectBar(M, "#03f0fc");
    selectBar(R, "#42f554");
    var left = arr.slice(L, M + 1);
    var right = arr.slice(M + 1, R + 1);

    var temp = []; //temp store

    var i = 0;
    var j = 0;

    //goal -- keep track of index
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            selectBar(L + i, "red");
            temp.push(left[i]);
            i++;
        } else {
            selectBar(M+1 + j, "red");
            temp.push(right[j]);
            j++;
        }
        numComparasions++;
        await sleep(delayInSeconds);
        changeBarColours(color);
        selectBar(L, "#42f554");
        selectBar(M, "#03f0fc");
        selectBar(R, "#42f554");
    }

    while (i < left.length) {
        selectBar(L + i, "red");
        temp.push(left[i]);
        i++;
        await sleep(delayInSeconds);
        changeBarColours(color);
        selectBar(L, "#42f554");
        selectBar(M, "#03f0fc");
        selectBar(R, "#42f554");
    }

    while (j < right.length) {
        selectBar(M + 1 + j, "red");
        temp.push(right[j]);
        j++;
        await sleep(delayInSeconds);
        changeBarColours(color);
        selectBar(L, "#42f554");
        selectBar(M, "#03f0fc");
        selectBar(R, "#42f554");
    }

    changeBarColours(color);
    selectBar(L, "#42f554");
    selectBar(M, "#03f0fc");
    selectBar(R, "#42f554");

    //no sound here
    for (let k = 0; k < temp.length; k++) {
        selectBar(L, "#42f554");
        selectBar(R, "#42f554");
        selectBar(L+k, "red");
        arr[L + k] = temp[k];
        changeBarHeights(nums);
        await sleep(delayInSeconds);
        changeBarColours(color);
    }

    changeBarColours(color);
}