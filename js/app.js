const start = document.getElementById("start");
const header = document.getElementById("header");
const box_container = document.getElementById("box-container");
const arrows = document.getElementById("arrows");
const logo_start = document.querySelector(".logo_start");
const arrow_right = document.querySelector(".arrow-right");
const second_page = document.getElementById("second_page");
const arrow_left = document.querySelector(".arrow-left");

// Start button
start.onclick = function () {
    box_container.classList.add("activeBox");
    header.classList.add("activeHeader");
    arrows.classList.add("activeArrows");
    logo_start.classList.add("hideLogo");
}

// Next button
arrow_right.onclick = function () {
    const num_header = document.querySelector(".num_header").innerText = '2/4';
    box_container.classList.remove("activeBox");
    second_page.classList.add("activePage");
    arrow_left.classList.add("activeArrowLeft");
}
