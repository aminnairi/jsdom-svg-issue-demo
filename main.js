"use strict";

const { JSDOM } = require("jsdom");

const dom = new JSDOM(`
    <svg id="svg">
        <g id="group"></g>
    </svg>
`);

const svg = dom.window.document.getElementById("svg");
const group = dom.window.document.getElementById("group");

console.log(svg.constructor);   // [Function: SVGSVGElement]
console.log(group.constructor); // [Function: SVGElement]
