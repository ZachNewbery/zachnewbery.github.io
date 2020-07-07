window.onscroll = function() {checkNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function checkNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}


function openMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "responsive") {
        x.className = "";
    } else {
        x.className += "responsive";
    }
}