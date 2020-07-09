document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('#navbar');
    var navTop = navbar.offsetTop;
    document.getElementById("defaultLang").click();
    window.addEventListener('scroll', checkNav);

    function checkNav() {
        if (window.pageYOffset >= navTop) {
          document.body.style.paddingTop = 0;
          navbar.classList.add("sticky");
        } else {
          document.body.style.paddingTop = nav.offsetHeight + 'px';
          navbar.classList.remove("sticky");
        }
    }
})


function openMenu() {
    var x = document.getElementById("navbar");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

function openProjects(evt, language) {
    var i, content, link;   

    content = document.getElementsByClassName("project-content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    link = document.getElementsByClassName("language");
    for (i = 0; i < link.length; i++) {
        link[i].className = link[i].className.replace(" active", "");
    }

    document.getElementById(language).style.display = "block";
    evt.currentTarget.className += " active";    
}

$(document).ready(function(){
    $("#home-link").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $("#about-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 1000);
    });
    $("#resume-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#resume-section").offset().top
        }, 1000);
    });
    $("#project-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#project-section").offset().top
        }, 1000);
    });
    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);
    });
});













