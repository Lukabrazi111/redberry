const start = document.getElementById("start");
const header = document.getElementById("header");
const box_container = document.getElementById("box-container");
const arrows = document.getElementById("arrows");
const logo_start = document.querySelector(".logo_start");
const arrow_right = document.querySelector(".arrow-right");
const second_page = document.getElementById("second_page");
const arrow_left = document.querySelector(".arrow-left");
const slide = document.querySelectorAll(".slide");

// Start button
// start.addEventListener("click", function() {
//     box_container.classList.add("activeBox");
//     header.classList.add("activeHeader");
//     arrows.classList.add("activeArrows");
//     logo_start.classList.add("hideLogo");
// });

let current = 0;

function reset() {
    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    slide[0].style.display = "flex";
}

function slideRight() {
    reset();
    slide[current + 1].style.display = "flex";
    current++;
}

arrow_right.addEventListener("click", function() {
    slideRight();
})

startSlide();




// Next button
// arrow_right.onclick = function () {
//     const num_header = document.querySelector(".num_header").innerText = '2/4';
//     box_container.classList.remove("activeBox");
//     second_page.classList.add("activePage");
//     arrow_left.classList.add("activeArrowLeft");
// }
//
// arrow_left.onclick = function () {
//     box_container.classList.add("activeBox");
//     header.classList.add("activeHeader");
//     arrows.classList.add("activeArrows");
//     logo_start.classList.add("hideLogo");
//
//     document.querySelector(".num_header").innerText = '1/4'
//     second_page.classList.remove("activePage");
//     arrow_left.classList.remove("activeArrowLeft");
// }
