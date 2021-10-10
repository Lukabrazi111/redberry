const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");

first_input = document.querySelector(".first_input");
second_input = document.querySelector(".second_input");
third_input = document.querySelector(".third_input");

// Check for submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
});

// Check validation inputs
function checkInputs() {
    const username_value = username.value.trim();
    const lastname_value = lastname.value.trim();
    const email_value = email.value.trim();

    const letters = /^[A-Za-z]+$/;
    // const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    // Username
    if (username_value.length < 3) {
        first_input.classList.add("error");
        first_input.textContent =
            "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
    } else if (username_value.length > 255) {
        first_input.classList.add("error");
        first_input.textContent =
            "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
    } else if (!username_value.match(letters)) {
        first_input.classList.add("error");
        first_input.textContent =
            "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
    } else {
        first_input.classList.remove("error");
        first_input.textContent = "";
    }

    // Lastname
    if (lastname_value.length < 3) {
        second_input.classList.add("error");
        second_input.textContent =
            "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
    } else if (lastname_value.length > 255) {
        second_input.classList.add("error");
        second_input.textContent =
            "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან";
    } else if (!lastname_value.match(letters)) {
        second_input.classList.add("error");
        second_input.textContent =
            "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
    } else {
        second_input.classList.remove("error");
        second_input.textContent = "";
    }

    //Email
    if (email_value.length === 0) {
        third_input.classList.add("error");
        third_input.textContent = "შეავსეთ ველი";
    } else {
        third_input.classList.remove("error");
        third_input.textContent = "";
    }

    if (
        !first_input.classList.contains("error") &&
        !second_input.classList.contains("error") &&
        !third_input.classList.contains("error")
    ) {
        arrows.classList.add("activeArrows");
    } else {
        arrows.classList.remove("activeArrows");
    }
}
