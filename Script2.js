var noBox = document.getElementById("noBox");
var yesBox = document.getElementById("yesBox");


noBox.addEventListener("mouseover", function() {
    noBox.style.visibility = "hidden";
});

yesBox.addEventListener("click", function() {
    window.location.href = "index3.html";
});