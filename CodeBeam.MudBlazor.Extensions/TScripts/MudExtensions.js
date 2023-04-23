﻿
class MudScrollManagerExtended {

    scrollToMiddle(parentId, childId) {

        let parent = document.getElementById(parentId);
        let child = document.getElementById(childId);

        parent.scrollTop = (child.offsetTop - parent.offsetHeight) + (parent.offsetHeight / 2) + (child.offsetHeight / 2);
    }
};
window.mudScrollManagerExtended = new MudScrollManagerExtended();

function auto_size(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight + 4) + "px";
}

function getcss(classe, cssprop) {
    const element = document.querySelector(classe);
    return element.style.getPropertyValue(cssprop);
}

function setcss(classe, cssprop, value) {
    const elements = document.querySelectorAll(classe);

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.setProperty(cssprop, value);
    }
}