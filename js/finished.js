// const finish_submit = document.getElementById("finish_submit");
const body = document.querySelector("body");
const lastTextContainer = document.querySelector(".last_text-container");
const form_fourth = document.getElementById("form-fourth");
const third_answer1 = document.querySelectorAll(".third_answer1");
const third_answer2 = document.querySelectorAll(".third_answer2");

third_answer1.forEach(answer => {
    answer.addEventListener("click", function (event) {
        if (event.target.classList.contains("third_answer1")) {

        }
    });

})

function questionResult(element) {
    let isCorrect = false;

    element.forEach(answer => {
        const input = answer.querySelector(".radio__input");
        if (input.checked) {
            isCorrect = true;
        }
    })

    return isCorrect;
}

form_fourth.addEventListener("submit", function (e) {

    e.preventDefault();

    if (questionResult(third_answer1) && questionResult(third_answer2)) {
        document.querySelector(".container").remove();

        lastTextContainer.style.display = "block";
        lastTextContainer.innerHTML = `
                    <img class="big_star" src="img/bigstar.png" alt="bigstar">
                    <p class="last_text">მ ა დ ლ ო ბ ა</p>
                    <img class="lil_star" src="img/lilstar.png" alt="lilstar">
                `;

        body.classList.add("active");
    }

})





