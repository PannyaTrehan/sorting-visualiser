import { elements } from "../index.js";

export function changeBarColours(color) {
    elements.forEach(element => {
        element.style.backgroundColor = color;
    })
}