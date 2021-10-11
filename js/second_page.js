const first_radio = document.querySelector(".first_radio");
const second_radio = document.querySelector(".second_radio");
const third_radio = document.querySelector(".third_radio");
const second_question = document.querySelector(".second_question");
const second_question2 = document.querySelector(".second_question2");
const second_question3 = document.querySelector(".second_question3");
const form_radio = document.getElementById("form-radio");
const radio = document.querySelectorAll(".radio");


radio.forEach(function (label) {
    label.addEventListener("click", function (e) {
        if (e.target.classList.contains("first_radio")) {
            arrow_right.style.display = "none";
        }

        if (e.target.classList.contains("second_radio-button")) {
            arrow_right.style.display = "none";
        }

        if (e.target.classList.contains("second_radio") || e.target.classList.contains("third_radio")) {
            arrow_right.style.display = "block";
        }
    });
});

first_radio.addEventListener("click", function () {
    // const label = document.createElement("label");
    // label.classList.add("radio");
    // label.classList.add("second_radio-button");
    //
    // const input = document.createElement("input");
    // input.classList.add("radio__input");
    // input.setAttribute("name", "antiSxeuli");
    // input.setAttribute("type", "radio");
    //
    // const div = document.createElement("div");
    // div.classList.add("radio__radio");
    //
    // const p = document.createElement("p");
    // p.textContent = "კი";
    //
    // label.appendChild(input);
    // label.appendChild(div);
    // label.appendChild(p);
    //
    // const label_second = document.createElement("label");
    // label_second.classList.add("radio");
    // label_second.classList.add("third_radio-button");
    //
    // const input_second = document.createElement("input");
    // input_second.classList.add("radio__input");
    // input_second.setAttribute("name", "antiSxeuli");
    // input_second.setAttribute("type", "radio");
    //
    // const div_second = document.createElement("div");
    // div_second.classList.add("radio__radio");
    //
    // const p_second = document.createElement("p");
    // p_second.textContent = "არა";
    //
    // label_second.appendChild(input_second);
    // label_second.appendChild(div_second);
    // label_second.appendChild(p_second);
    //
    // second_question.innerHTML = `
    //             <p>ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>
    //             ${label.outerHTML}
    //             ${label_second.outerHTML}
    // `;

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
    };

    third_radio.onclick = function () {
        second_question.innerHTML = ``;
        second_question2.innerHTML = ``;
        second_question3.innerHTML = ``;
    };
});

function secondRadioButton() {
    const input = document.createElement("input");
    input.classList.add("remember");
    input.setAttribute("type", "text");
    input.setAttribute("name", "remember");
    input.setAttribute("placeholder", "რიცხვი");

    const input2 = document.createElement("input");
    input2.classList.add("remember");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "remember");
    input2.setAttribute("placeholder", "ანტისხეულების რაოდენობა");

    second_question2.innerHTML = `
                <div class="remember_box">
                <p>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
                    ${input.outerHTML}
                    ${input2.outerHTML}
                </div>
    `;




    form_radio.addEventListener("keyup", function (e) {
        const inputs = document.querySelectorAll(".remember");

        inputs.forEach((input) => {
            const inputLength = input.value.length;

            if (inputLength === 0) {
                arrow_right.style.display = "none";
            } else {
                arrow_right.style.display = "block";
            }
        });
    });

    second_question3.innerHTML = ``;
}

function secondRadioButton2() {
    second_question3.innerHTML = `
                <p>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
                <div class="date_div">
                    <input type="date" class="date remember" type="submit">
                </div>
    `;

    second_question2.innerHTML = ``;
    arrow_right.style.display = "none";
}

