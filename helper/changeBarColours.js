import { elements } from "../index.js";
import { color } from "../index.js";

export function changeBarColours() {
    elements.forEach(element => {
        element.style.backgroundColor = color;
    })
}