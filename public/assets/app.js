let logo = document.querySelectorAll('img');

function zoom() {
    for(let i = 0; i < logo.length; i++) {
        logo[i].addEventListener("mouseover", function () {
            logo[i].style.transform = "scale(2)"
        })
        logo[i].addEventListener("mouseleave", function () {
            logo[i].style.transform = "scale(1)"
        })
    }
}

zoom();