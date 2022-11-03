let logo = document.querySelectorAll('img');

function zoom() {
    for(let i = 0; i < logo.length; i++) {
        logo[i].addEventListener("mouseover", function () {
            logo[i].style.transform = "scale(2.5)";
            logo[i].style.transition = "0.5s";

            logo[i-1].style.transform = "scale(1.5)";
            logo[i-1].style.transition = "0.5s";

            logo[i+1].style.transform = "scale(1.5)";
            logo[i+1].style.transition = "0.5s";
        });
        logo[i].addEventListener("mouseleave", function () {
            logo[i].style.transform = "scale(1)";
            logo[i].style.transition = "0.5s";

            logo[i-1].style.transform = "scale(1)";
            logo[i-1].style.transition = "0.5s";

            logo[i+1].style.transform = "scale(1)";
            logo[i+1].style.transition = "0.5s";
        });
    }
}

zoom();