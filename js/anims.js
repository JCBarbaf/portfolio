
enters = true
function photoAnim(container) {
    imgs = container.getElementsByTagName("img")
    // alert(enters)
    if (enters) {
        imgs[1].classList.remove("imganimout")
        imgs[1].classList.add("imganimin")
        enters = false
        // alert("hola")
    } else {
        imgs[1].classList.remove("imganimin")
        imgs[1].classList.add("imganimout")
        enters = true
    }
}
counter = 1
animFinished = true
function slideshow(flecha, avanzar,numImgs) {
    if (animFinished) {
        animFinished = false
        // alert("hola")
        slideshowDiv = flecha.parentNode
        img = slideshowDiv.querySelector(".fotos img:last-of-type")
        // alert(img.src)
        if (avanzar) {
            img.classList.add("slide-left")
        } else {
            img.classList.add("slide-right")
        }
        img.classList.add("slide-anim")
        setTimeout(changeSrc,500,img,avanzar,numImgs)
        setTimeout(removeClass,1000,img,"slide-anim")
        setTimeout(removeClass,1000,img,"slide-right")
        setTimeout(removeClass,1000,img,"slide-left")
    }
}
function changeSrc(img, avanzar,numImgs) {
    if (avanzar) {
        counter ++
        if (counter > numImgs) {
            counter = 1
        }
    } else {
        counter --
        if (counter < 1) {
            counter = numImgs
        }
    }
    img.src = img.src.slice(0,-6) + counter.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) + ".png"
    // alert(img.src)
}
function removeClass(elem,clase) {
    elem.classList.remove(clase)
    animFinished = true
}
