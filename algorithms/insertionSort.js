import { changeBarHeights } from "../helper/changeBarHeights.js";
import { selectBar } from "../helper/selectBar.js";
import { sleep } from "../helper/sleep.js";
import { changeBarColours } from "../helper/changeBarColours.js";
import { color } from "../index.js";
import { delayInSeconds } from "../index.js";
import { nums } from "../index.js";

// Function to sort an array using insertion sort
export async function insertionSort(arr, n) {
    let i, key, j;

    for (i = 1; i < n; i++) 
    {  
        key = arr[i];
        await sleep(delayInSeconds);
        selectBar(i, "#42f554");
        console.log(i)
        j = i - 1;
        await sleep(delayInSeconds);
        selectBar(j, "#03f0fc");
        console.log(j)
  
        while (j >= 0 && arr[j] > key) 
        {
            numComparasions++;  
            arr[j + 1] = arr[j];
            selectBar(j, "#FFFFFF")  
            j = j - 1;
            if (j >= 0 && arr[j] > key) {
                selectBar(j, "#03f0fc");
                await sleep(delayInSeconds);
            }
        }
        numComparasions++;  
        arr[j + 1] = key;
        changeBarHeights(nums);
        selectBar(j+1 ,"#ff0000");
        await sleep(delayInSeconds);
        changeBarColours();
    }
}