let time = 6000,
    currentImageIndex = 0,
    imagens = document.querySelectorAll("#slider img")
    max = imagens.length

    function nextImage() {

        imagens[currentImageIndex].classList.remove("selected")

        currentImageIndex++

        if(currentImageIndex >= max)
        currentImageIndex = 0

        imagens[currentImageIndex].classList.add("selected")
    }

    function start() {
    
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
    
}

window.addEventListener("load", start)
