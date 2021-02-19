let time = 2000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#banner-container img");
let max = images.length;


function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    
    currentImageIndex ++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        //troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)