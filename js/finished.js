const finish_submit = document.getElementById("finish_submit");
const body = document.querySelector("body");
const lastTextContainer = document.querySelector(".last_text-container");

finish_submit.addEventListener("click", function (e) {
    document.querySelector(".container").remove();

    lastTextContainer.style.display = "block";
    lastTextContainer.innerHTML = `
                    <img class="big_star" src="img/bigstar.png" alt="bigstar">
                    <p class="last_text">მ ა დ ლ ო ბ ა</p>
                    <img class="lil_star" src="img/lilstar.png" alt="lilstar">
                `;

    body.classList.add("active");
});
