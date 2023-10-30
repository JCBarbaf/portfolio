scrollmovement = 20;
animcounter=0;
canmove = true;
burgerIcon = document.getElementById("burger-icon")
burgerMenu = document.getElementById("burger-menu")
function goTo(url) {
    window.location = url;
}
function scrollSlider(arrow, direction) {
    // alert("hola")
    slider = arrow.parentNode.getElementsByClassName("slider");
    if (canmove) {
        canmove = false;
        animscroll = setInterval(scrollAnim, 10, slider[0], direction);
    }
    // if (direction=="right") {
    //     slider[0].scrollLeft += scrollmovement
        
    // } else if (direction=="left") {
    //     slider[0].scrollLeft -= scrollmovement
    // }
}
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
        // alert("hola")
    }
}
function burger() {
    // alert(burgerIcon)
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
function ampliar(params) {
    
}