import { sleep } from "./sleep.js";
import { selectBar } from "./selectBar.js";

export async function finalVisualise(numElements, delayInSeconds) {
    for (let i = 0; i < numElements; i++) {
        selectBar(i, "#42f554");
        await sleep(delayInSeconds/3);
    }
}