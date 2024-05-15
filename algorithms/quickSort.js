import { changeBarHeights } from "../helper/changeBarHeights.js";
import { selectBar } from "../helper/selectBar.js";
import { sleep } from "../helper/sleep.js";
import { changeBarColours } from "../helper/changeBarColours.js";
import { delayInSeconds } from "../index.js";

export async function quickSort(arr, start, end) {
    changeBarColours();

	if (start >= end) {
        numComparasions++;
        return;
    }

	let left = start;
    let right = end;
    let pivotValue = Math.floor((start+end) / 2);
	let pivot = arr[pivotValue];
    selectBar(pivotValue, "#03f0fc");
    selectBar(left, "red");
    selectBar(right, "red");

	while (left <= right) {
        numComparasions++;

		while (left <= right && arr[left] < pivot) {
            numComparasions++;
			left++

            //whilst the left is being incremented keep the right constant with a blue value
            selectBar(left, "red");
            selectBar(right, "blue");
            await sleep(delayInSeconds);
            changeBarColours();
            selectBar(pivotValue, "#03f0fc");
            selectBar(right, "blue");
		}

        changeBarColours();
        selectBar(pivotValue, "#03f0fc");

        //keep the left value constant
		while (left <= right && arr[right] > pivot){
            numComparasions++;
			right--;

            selectBar(right, "red");
            selectBar(left, "blue");
            await sleep(delayInSeconds);
            changeBarColours();
            selectBar(left, "blue");
            selectBar(pivotValue, "#03f0fc");
		}
        
        changeBarColours();
        selectBar(pivotValue, "#03f0fc");

		if (left <= right){
            numComparasions++;

			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;

            changeBarHeights();
            await sleep(delayInSeconds);

			left++;
			right--;
		}

        changeBarColours();
        selectBar(pivotValue, "#03f0fc");
	}

    changeBarColours();

    //start and end variables values always stay the same
	await quickSort(arr, start, right);
	await quickSort(arr, left, end);

	return arr;
}