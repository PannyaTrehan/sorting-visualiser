import { elements } from "../index.js";
import { numElements } from "../index.js";
import { nums } from "../index.js";

export function changeBarHeights() {
    elements.forEach(element => {
        let percentage = (nums[parseInt(element.id)]/numElements)*100;
        element.style.height = `${percentage}%`;
    })
}