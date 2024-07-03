import { changeBarHeights } from "../helper/changeBarHeights.js";
import { selectBar } from "../helper/selectBar.js";
import { sleep } from "../helper/sleep.js";
import { changeBarColours } from "../helper/changeBarColours.js";
import { color } from "../index.js";
import { delayInSeconds } from "../index.js";
import { nums } from "../index.js";

export async function gnomeSort(arr) {
    let index = 0;
    await sleep(delayInSeconds);
    selectBar(index, "#42f554");

    while (index < arr.length) {
        if (index == 0 || arr[index] >= arr[index - 1]) {
            numComparasions++;
            selectBar(index, "#FFFFFF");
            index++;
            await sleep(delayInSeconds);
            selectBar(index, "#ff0000");
            await sleep(delayInSeconds);
            changeBarColours();
        } else {
            //swap element at "index" and "index-1"
            [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
            selectBar(index, "#42f554");
            selectBar(index - 1, "#42f554");
            changeBarHeights();
            await sleep(delayInSeconds);
            changeBarColours();
            index--;
        }
    }

    changeBarHeights();
}