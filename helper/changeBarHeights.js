import { elements } from "../index.js";

export function changeBarHeights(nums) {
    elements.forEach(element => {
        let percentage = (nums[parseInt(element.id)]/100)*100;
        element.style.height = `${percentage}%`;
    })
}