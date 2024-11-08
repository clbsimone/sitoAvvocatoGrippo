// Funzione per ingrandire l'immagine
function expandImage(imgElement) {
    var overlay = document.getElementById("overlay");
    var overlayImage = document.getElementById("overlayImage");

    // Imposta l'immagine dell'overlay
    overlayImage.src = imgElement.src;

    // Mostra l'overlay
    overlay.style.display = "flex";
}

// Funzione per chiudere l'overlay
function closeImage(event) {
    var overlay = document.getElementById("overlay");

    // Impedisce che il click sull'icona "X" chiuda l'overlay se viene cliccato direttamente
    if (event) {
        event.stopPropagation();
    }

    // Nasconde l'overlay
    overlay.style.display = "none";
}
