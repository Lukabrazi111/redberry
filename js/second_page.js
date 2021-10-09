const first_radio = document.querySelector(".first_radio");
const second_radio = document.querySelector(".second_radio");
const third_radio = document.querySelector(".third_radio");
const second_question = document.querySelector(".second_question");
const second_question2 = document.querySelector(".second_question2");
const second_question3 = document.querySelector(".second_question3");


first_radio.addEventListener("click", function () {
    second_question.innerHTML = `
                <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
                <label onclick="secondRadioButton()" class="radio second_radio-button">
                    <input class="radio__input" name="antiSxeuli" type="radio">
                    <div class="radio__radio"></div>
                    კი
                </label>
                <label onclick="secondRadioButton2()" class="radio third_radio-button">
                    <input class="radio__input" name="antiSxeuli" type="radio">
                    <div class="radio__radio"></div>
                    არა
                </label>
    `;

    second_radio.onclick = function () {
        second_question.innerHTML = ``;
        second_question2.innerHTML = ``;
        second_question3.innerHTML = ``;
    }

    third_radio.onclick = function () {
        second_question.innerHTML = ``;
        second_question2.innerHTML = ``;
        second_question3.innerHTML = ``;
    }
});

function secondRadioButton() {
    second_question2.innerHTML = `
                <p>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
                <div action="#" class="remember_box">
                    <input class="remember" type="text" name="remember" placeholder="რიცხვი">
                    <input class="remember" type="text" name="remember" placeholder="ანტისხეულების რაოდენობა">
                </div>
    `;

    second_question3.innerHTML = ``;
}

function secondRadioButton2() {
    second_question3.innerHTML = `
                <p>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
                <div class="date">
                    <input type="date" class="date">
                </div>
    `;

    second_question2.innerHTML = ``;
}
