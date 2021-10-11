const form = document.getElementById("form");
first_input = document.querySelector(".first_input");
second_input = document.querySelector(".second_input");
third_input = document.querySelector(".third_input");

const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");

const letters = /^[A-Za-z]+$/;
const regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Check for keyup
form.addEventListener("keyup", function (e) {
    e.preventDefault();
    checkInputs(e.target);
});

// Check validation inputs
function checkInputs(target) {
    if (target.id === "username") {
        const username_value = target.value.trim();

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

    }

    if (target.id === "lastname") {
        const lastname_value = target.value.trim();

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
    }

    if (target.id === "email") {
        const email_value = target.value.trim();

        if (email_value.length === 0) {
            third_input.classList.add("error");
            third_input.textContent = "შეავსეთ ველი";
        } else if (!regx.test(String(email_value).toLowerCase())) {
            third_input.classList.add("error");
            third_input.textContent = "სწორად შეიყვანეთ ელ-ფოსტა";
        } else {
            third_input.classList.remove("error");
            third_input.textContent = "";
        }
    }


    if (!first_input.classList.contains("error")
        && !second_input.classList.contains("error")
        && !third_input.classList.contains("error")
        && username.value !== ""
        && lastname.value !== ""
        && email.value !== "") {
        arrows.classList.add("activeArrows");
    } else {
        arrows.classList.remove("activeArrows");
    }

}
