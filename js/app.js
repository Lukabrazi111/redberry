let start = document.getElementById("start");

start.addEventListener("click", function() {
    document.getElementById("header").style.display = 'flex';
    document.getElementById("box-container").style.display = 'flex';
    document.getElementById("arrows").style.display = 'flex';
    this.parentElement.parentElement.style.display = 'none';
})
