const start = document.getElementById("start");
const header = document.getElementById("header");
const box_container = document.getElementById("box-container");
const arrows = document.getElementById("arrows");
const logo_start = document.querySelector(".logo_start");
const arrow_right = document.querySelector(".arrow-right");
const arrow_left = document.querySelector(".arrow-left");
const slides = document.querySelectorAll(".slide");
const num_header = document.querySelector(".num_header");

let current = 0;
let clicked = false;

// Start button
start.addEventListener("click", function () {
    box_container.classList.add("activeBox");
    header.classList.add("activeHeader");
    logo_start.classList.add("hideLogo");
});

// Reset all pages (display = none)
function reset() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
}

// Slide right
function slideRight() {
    reset();
    box_container.classList.add("activeBox");

    for (let i = 0; i < slides.length; i++) {
        slides[current + 1].style.display = "flex";
        num_header.textContent = `${current + 2}/4`;
    }

    arrow_right.style.display = "none";
    arrow_left.style.display = "block";

    if (current === 2) {
        arrow_right.style.display = 'none';
        arrow_left.style.display = "block";
    }

    // getRadioButtons();

    current++;
}

function slideLeft() {
    reset();
    for (let i = 0; i < slides.length; i++) {
        slides[current - 1].style.display = "flex";
        num_header.textContent = `${current}/4`;
    }

    arrow_right.style.display = "block";
    arrow_left.style.display = "block";

    if (current === 1) {
        arrow_left.style.display = "none";
        arrow_right.style.display = "block";
    }

    current--;
}

// function getRadioButtons() {
//     const radioButtonEls = document.querySelectorAll(".radio");
//
//     radioButtonEls.forEach(radioButtonEl => {
//         radioButtonEl.addEventListener("click", function () {
//             if (this.classList.contains("first_radio")) {
//                 arrow_right.style.display = "block";
//             } else {
//                 arrow_right.style.display = "none";
//             }
//         });
//     });
// }

arrow_right.addEventListener("click", function () {
    slideRight();
});

arrow_left.addEventListener("click", function () {
    slideLeft();
})

