var noBox = document.getElementById("noBox");
var yesBox = document.getElementById("yesBox");


const moveNoButton = () => {
    var x = Math.random() * (window.innerWidth - noBox.offsetWidth);
    var y = Math.random() * (window.innerHeight - noBox.offsetHeight);
  
    noBox.style.position = 'absolute';
    noBox.style.left = `${x}px`;
    noBox.style.top = `${y}px`;
  }

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};


noBox.addEventListener("mouseenter", moveNoButton);

yesBox.addEventListener("click", function() {
    window.location.href = "q2.html";
});