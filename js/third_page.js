const first_virus = document.querySelector(".first_virus");
const second_virus = document.querySelector(".second_virus");
const virus_question = document.querySelector(".virus_question");
const virus_questions3 = document.querySelector(".virus_questions3");
const virus_answer3 = document.querySelector(".virus_answer3");
const virus_answer4 = document.querySelector(".virus_answer4");
const virus_answer5 = document.querySelector(".virus_answer5");

first_virus.addEventListener("click", function () {
    virus_question.innerHTML = `
                <p>აირჩიე რა ეტაპზე ხარ*</p>
                <label class="radio radio_tape1" onclick="resetAnswer()">
                    <input class="radio__input" id="etapi" name="etapi" type="radio">
                    <div class="radio__radio"></div>
                    პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                </label>
                <label class="radio radio_tape2" onclick="resetAnswer()">
                    <input class="radio__input" name="etapi" type="radio">
                    <div class="radio__radio"></div>
                    სრულად აცრილი ვარ
                </label>
                <label onclick="addVirusAnswer()" class="radio radio_tape3">
                    <input class="radio__input" name="etapi" type="radio">
                    <div class="radio__radio"></div>
                    პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                </label>
    `;

    const radio = document.querySelectorAll(".radio");

    radio.forEach(function (label) {
        label.addEventListener("click", function (e) {
            if (
                e.target.classList.contains("radio_tape1") ||
                e.target.classList.contains("radio_tape2") ||
                e.target.classList.contains("radio_tape3")
            ) {
                arrow_right.style.display = "block";
            }

            if (e.target.classList.contains("second_virus")) {
                arrow_right.style.display = "none";
            }
        });
    });

    virus_questions3.innerHTML = ``;
    virus_answer5.innerHTML = ``;
    virus_answer4.innerHTML = ``;
    virus_answer3.innerHTML = ``;
});

second_virus.addEventListener("click", function () {
    virus_questions3.innerHTML = `
                        <p>რას ელოდები?*</p>
                            <label class="radio radio_tape4" onclick="resetLastQuestions()">
                                <input class="radio__input" name="waiting" type="radio">
                                <div class="radio__radio"></div>
                                დარეგისტრირებული ვარ და ველოდები რიცხვს
                            </label>
                            <label class="radio radio_tape5" onclick="noVaccinatedHandler()">
                                <input class="radio__input" name="waiting" type="radio">
                                <div class="radio__radio"></div>
                                არ ვგეგმავ
                            </label>
                            <label class="radio radio_tape6" onclick="readyVaccinated()">
                                <input class="radio__input" name="waiting" type="radio">
                                <div class="radio__radio"></div>
                                გადატანილი მაქვს და ვგეგმავ აცრას
                            </label>
    `;

    const radio = document.querySelectorAll(".radio");

    radio.forEach(function (label) {
        label.addEventListener("click", function (e) {
            if (
                e.target.classList.contains("radio_tape4") ||
                e.target.classList.contains("radio_tape5") ||
                e.target.classList.contains("radio_tape6")
            ) {
                arrow_right.style.display = "block";
            }

            if (e.target.classList.contains("first_virus")) {
                arrow_right.style.display = "none";
            }
        });
    });

    virus_answer3.innerHTML = ``;
    virus_question.innerHTML = ``;
});

function readyVaccinated() {
    virus_answer5.innerHTML = `
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება. <br><br>
        👉რეგისტრაციის ბმული
        <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    `;
    virus_answer4.innerHTML = ``;
}

function noVaccinatedHandler() {
    virus_answer4.innerHTML = `<a href="https://booking.moh.gov.ge/">👉 https://booking.moh.gov.ge/</a>`;
    virus_answer5.innerHTML = ``;
}

function resetAnswer() {
    virus_answer3.innerHTML = ``;
}

function resetLastQuestions() {
    virus_answer5.innerHTML = ``;
    virus_answer4.innerHTML = ``;
}

function addVirusAnswer() {
    virus_answer3.innerHTML = `
             რომ არ გადადო,
             ბარემ ახლავე დარეგისტრირდი
             <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    `;
}
