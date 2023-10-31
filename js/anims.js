// animacion para el cambio de foto simple
enters = true;
function photoAnim(container) {
    imgs = container.getElementsByTagName("img");
    if (enters) {
        imgs[1].classList.remove("imganimout");
        imgs[1].classList.add("imganimin");
        enters = false;
    } else {
        imgs[1].classList.remove("imganimin");
        imgs[1].classList.add("imganimout");
        enters = true;
    }
}
// slideshow
counter = 1;
animFinished = true;
function slideshow(flecha, avanzar,numImgs) {
    event.stopPropagation();
    if (animFinished) {
        animFinished = false;
        slideshowDiv = flecha.parentNode;
        img = slideshowDiv.querySelector(".fotos img:last-of-type");
        if (avanzar) {
            img.classList.add("slide-left");
        } else {
            img.classList.add("slide-right");
        }
        img.classList.add("slide-anim");
        setTimeout(changeSrc,500,img,avanzar,numImgs);
        setTimeout(removeClass,1000,img,"slide-anim");
        setTimeout(removeClass,1000,img,"slide-right");
        setTimeout(removeClass,1000,img,"slide-left");
    }
}
// cambiar el src de la imagen en mitad de la animacion
function changeSrc(img, avanzar,numImgs) {
    if (avanzar) {
        counter ++;
        if (counter > numImgs) {
            counter = 1;
        }
    } else {
        counter --;
        if (counter < 1) {
            counter = numImgs;
        }
    }
    img.src = img.src.slice(0,-6) + counter.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) + ".png";
}
// quitar la clase cuando la animación termine
function removeClass(elem,clase) {
    elem.classList.remove(clase);
    animFinished = true;
}
