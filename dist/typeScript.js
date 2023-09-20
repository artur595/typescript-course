"use strict";
const buttonElem = document.querySelector('.clickMe');
const bodyElem = document.body;
let isWhite = false;
buttonElem.addEventListener("click", () => {
    if (isWhite) {
        bodyElem.style.backgroundColor = "";
    }
    else {
        bodyElem.style.backgroundColor = "rgba(0,58,255,0.18)";
    }
    isWhite = !isWhite;
});
