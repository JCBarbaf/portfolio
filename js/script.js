scrollmovement = 20;
animcounter=0;
canmove = true;
// ir a una url
function goTo(url) {
    window.location = url;
}
// scroll en la barra de herramientas
function scrollSlider(arrow, direction) {
    slider = arrow.parentNode.getElementsByClassName("slider");
    if (canmove) {
        canmove = false;
        animscroll = setInterval(scrollAnim, 10, slider[0], direction);
    }
}
// animacion del scroll para las herramientas
function scrollAnim(slider, direction) {
    if (animcounter<scrollmovement) {
        if (direction=="right") {
            slider.scrollLeft += scrollmovement;
        } else if (direction=="left") {
            slider.scrollLeft -= scrollmovement;
        }
        animcounter++;
    } else {
        animcounter=0;
        clearInterval(animscroll);
        canmove = true;
    }
}
// menu burger
burgerIcon = document.getElementById("burger-icon");
burgerMenu = document.getElementById("burger-menu");
function burger() {
    if (burgerIcon.classList.contains("open")) {
        burgerIcon.classList.remove("open")
        burgerMenu.classList.remove("open")
        burgerIcon.classList.add("close")
        burgerMenu.classList.add("close")
    } else {
        burgerIcon.classList.remove("close")
        burgerMenu.classList.remove("close")
        burgerIcon.classList.add("open")
        burgerMenu.classList.add("open")
    }
}
// Ampliar imagen detalle
function ampliar(ampliarlo) {
    event.stopPropagation();
    container = document.getElementById("fullscreen-container")
    if (ampliarlo && !container.classList.contains("fullscreen")) {
        container.classList.add("fullscreen")
    } else if (!ampliarlo && container.classList.contains("fullscreen")) {
        container.classList.remove("fullscreen")
    }
}
// Ampliar imagen arte
function ampliarArte(arte) {
    imgs = document.querySelectorAll(".galeria img")
    if (arte.classList.contains("fullscreen")) {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("fullscreen")
        }
        
    } else {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("fullscreen")
        }
        arte.classList.add("fullscreen")

    }
}