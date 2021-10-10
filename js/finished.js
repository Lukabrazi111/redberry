const finish_submit = document.getElementById("finish_submit");
const body = document.querySelector("body");
const lastTextContainer = document.querySelector(".last_text-container");

finish_submit.addEventListener("submit", function (e) {
    e.preventDefault();

    const radio = document.querySelectorAll(".radio");
    radio.forEach(function (label) {
        label.addEventListener("click", function (e) {
            console.log("123");
        });
    });

    console.log("123");

    // document.querySelector(".container").remove();
    //
    // lastTextContainer.style.display = "block";
    // lastTextContainer.innerHTML = `
    //                 <img class="big_star" src="img/bigstar.png" alt="bigstar">
    //                 <p class="last_text">მ ა დ ლ ო ბ ა</p>
    //                 <img class="lil_star" src="img/lilstar.png" alt="lilstar">
    //             `;
    //
    // body.classList.add("active");


});