scrollmovement = 20;
animcounter=0;
canmove = true;
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