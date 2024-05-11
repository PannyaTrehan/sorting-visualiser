import { elements } from "../index.js";

export function selectBar(index, color) {
    elements[index].style.backgroundColor = color;
}